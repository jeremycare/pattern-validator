import React from 'react';
import { Input, Select } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
`;

export const InputCondition = props => {
  const { condition, conditions } = props;
  const Option = Select.Option;
  const handleChangeCondition = value => {
    const selectedType = conditions.find(cond => cond.name === value)
    props.onChange({
      ...condition,
      type: selectedType
    })
  };

  const handleChangeInput = e => {
      props.onChange({
        ...condition,
        input: e.target.value
      })
  }

  return (
    <Container>
      <Select
        defaultValue={condition.type.name}
        style={{ width: 120, paddingRight: '10px' }}
        onChange={handleChangeCondition}
      >
        {conditions.map((condition, index) =>
            <Option key={index} value={condition.name}>
              {condition.name}
            </Option>
        )}
      </Select>
      <Input
        placeholder="Type url you want to check."
        value={condition.input}
        onChange={handleChangeInput}
      />
    </Container>
  );
};
