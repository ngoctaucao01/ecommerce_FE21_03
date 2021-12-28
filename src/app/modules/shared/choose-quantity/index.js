import { useState } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from "react-i18next";

const useChooseQuantity = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(1);

  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => {
    if (count === 1) {
      toast.error(t('NOTIFY.QUANTITY_CANNOT_BE_LESS_THAN_ONE'));
      return setCount(1);
    }
    return setCount(count - 1);
  }
  const onCountChange = value => setCount(value);

  return [count, onIncrease, onDecrease, onCountChange];
};

export default useChooseQuantity;
