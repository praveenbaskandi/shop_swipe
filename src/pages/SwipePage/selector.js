import {useSelector} from 'react-redux';

const useSelect = () => {
  const {isLoading, clothList} = useSelector(({cartReducer: CR}) => CR);

  return {
    isLoading,
    clothList,
  };
};

export default useSelect;
