import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";

import { langOptions } from "../../data/select";

const MySelect = () => {
  const { control } = useForm();
  const defaultValue = "german";

  const getValues = (value) => {
    return value ? langOptions.find((lang) => lang.value === value) : "";
  };

  return (
    <div className="lang-select">
      <Controller
        control={control}
        name="lang-select"
        defaultValue={defaultValue}
        render={({ field: { onChange, value, ref } }) => {
          return (
            <Select
              classNamePrefix="custom-select"
              inputRef={ref}
              options={langOptions}
              value={getValues(value)}
              onChange={(newValue) => {
                onChange(newValue.value);
              }}
            />
          );
        }}
      />
    </div>
  );
};

export default MySelect;
