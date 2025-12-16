import { useEffect, useState } from 'react';
import { Combobox, InputBase, ScrollArea, useCombobox } from '@mantine/core';


const SelectInput = (props) => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState<string | null>(null);
    const [search, setSearch] = useState('');
    
    useEffect(() => {
        try {
            if (props?.options) {
                setData(props.options);
            }
            if (props?.form?.getInputProps && props?.name) {
                const inputProps = props.form.getInputProps(props.name);
                const currentValue = inputProps?.value || '';
                setValue(currentValue);
                setSearch(currentValue);
            }
        } catch (error) {
            console.error('SelectInput initialization error:', error);
        }
    }, [props?.options, props?.form, props?.name]);
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const exactOptionMatch = data?.some((item) => item === search) || false;
  const filteredOptions = exactOptionMatch
    ? data
    : data?.filter((item) => item?.toLowerCase()?.includes(search?.toLowerCase()?.trim() || '')) || [];

  const options = filteredOptions?.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  )) || [];

  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      onOptionSubmit={(val) => {
        try {
          if (val === '$create') {
            setData((current) => [...current, search]);
            setValue(search);
            if (props?.form?.setFieldValue && props?.name) {
              props.form.setFieldValue(props.name, search);
            }
          } else {
            setValue(val);
            setSearch(val);
            if (props?.form?.setFieldValue && props?.name) {
              props.form.setFieldValue(props.name, val);
            }
          }
          combobox.closeDropdown();
        } catch (error) {
          console.error('SelectInput option submit error:', error);
        }
      }}
    >
      <Combobox.Target>
        <InputBase 
          withAsterisk 
          label={props?.label || ''}
          rightSection={<Combobox.Chevron />}
          {...(props?.form?.getInputProps ? props.form.getInputProps(props.name) : {})}
          value={search || ''}
          onChange={(event) => {
            try {
              combobox.openDropdown();
              combobox.updateSelectedOptionIndex();
              setSearch(event.currentTarget.value);
            } catch (error) {
              console.error('SelectInput onChange error:', error);
            }
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => {
            combobox.closeDropdown();
            setSearch(value || '');
          }}
          placeholder={props?.placeholder || ''}
          rightSectionPointerEvents="none"
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
        <ScrollArea.Autosize mah={200} type="scroll">
          {options}
          {!exactOptionMatch && search.trim().length > 0 && (
            <Combobox.Option value="$create">+ Create {search}</Combobox.Option>
          )}
          </ScrollArea.Autosize>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
export default SelectInput;