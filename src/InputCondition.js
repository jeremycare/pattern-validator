import React from 'react';
import { Input, Select, Button } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
`;

const StyledButton = styled(Button)`
  margin-right: 10px;
`;

export const InputCondition = props => {
  const { condition, conditions, gates, showGate, onDelete } = props;
  const Option = Select.Option;

  const handleChangeCondition = value => {
    const selectedType = conditions.find(cond => cond.name === value);
    props.onChange({
      ...condition,
      type: selectedType
    });
  };

  const handleChangeInput = e => {
    props.onChange({
      ...condition,
      input: e.target.value
    });
  };

  const handleChangeGate = value => {
    props.onChange({
      ...condition,
      gate: value
    });
  };

  return (
    <Container>
      <StyledButton type="danger" icon="cross" ghost onClick={onDelete}/>
      {showGate && (
        <Select
          defaultValue={condition.gate}
          style={{ width: 120, paddingRight: '10px' }}
          onChange={handleChangeGate}
        >
          {gates.map((gate, index) => (
            <Option key={index} value={gate}>
              {gate}
            </Option>
          ))}
        </Select>
      )}
      <Select
        defaultValue={condition.type.name}
        style={{ width: 160, paddingRight: '10px' }}
        onChange={handleChangeCondition}
      >
        {conditions.map((condition, index) => (
          <Option key={index} value={condition.name}>
            {condition.name}
          </Option>
        ))}
      </Select>
      <Input
        placeholder="Type pattern."
        value={condition.input}
        onChange={handleChangeInput}
      />
    </Container>
  );
};
