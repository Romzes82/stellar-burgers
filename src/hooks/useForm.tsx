import { TLoginData } from '@api';
import { ChangeEvent, useState } from 'react';

// наставник рекомендовал не реализовывать этот хук с текущим стартером ПР. В остальных случаях этот кастомный хук очень полезен
export const useForm = (formState: TLoginData) => {
  const [values, setValues] = useState(formState);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  return {
    values,
    onChangeInput,
    setValues
  };
};
