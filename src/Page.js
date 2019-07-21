import React from 'react';
import { Input, Button, Alert } from 'antd';
import styled from 'styled-components';
import { InputCondition } from './InputCondition';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
`;

const StyledAlert = styled(Alert)`
  margin-top: 10px;
`;

const useConditions = () => {
  const conditionsValues = [
    { name: 'End with', isMatching: (input, value) => false },
    { name: 'Start with', isMatching: (input, value) => true },
    { name: 'Contains', isMatching: (input, value) => true },
    { name: 'Does not contains', isMatching: (input, value) => true }
  ];
  const defaultCondition = {
    gate: 'AND',
    type: conditionsValues[0],
    input: ''
  };
  const [conditions, setConditions] = React.useState([]);

  const setSpecificConditions = (index, value) => {
    const newConditions = [...conditions];
    newConditions[index] = value;
    setConditions(newConditions);
  };

  const addNewCondition = () => {
    const newConditions = [...conditions];
    newConditions.push(defaultCondition);
    setConditions(newConditions);
  };

  return [conditions, setSpecificConditions, addNewCondition, conditionsValues];
};

export const Page = props => {
  const [input, setInput] = React.useState('');
  const [
    conditions,
    setCondition,
    addNewCondition,
    conditionsValues
  ] = useConditions();

  const handleChange = e => {
    setInput(e.target.value);
  };

  const isMatching = conditions.reduce(
    (acc, condition) =>
      condition.gate === 'AND'
        ? acc && condition.type.isMatching(input, condition.input)
        : acc || condition.type.isMatching(input, condition.input),
    true
  );
  const alertMessage = isMatching ? 'It\'s matching' : 'it\'s not matching !';
  const alertType = isMatching ? 'success' : 'error'


  return (
    <Container>
      <Input
        placeholder="Type url you want to check."
        value={input}
        onChange={handleChange}
      />
      <StyledAlert message={alertMessage} type={alertType} showIcon />
      {conditions.map((condition, index) => (
        <InputCondition
          key={index}
          condition={condition}
          conditions={conditionsValues}
          onChange={setCondition.bind(null, index)}
        />
      ))}
      <StyledButton onClick={addNewCondition}>Add Condition</StyledButton>
    </Container>
  );
};
