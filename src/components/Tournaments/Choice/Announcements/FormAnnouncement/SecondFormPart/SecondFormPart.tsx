import React, {useState} from 'react';
import {
    Button,
    Modal,
    Radio,
    RadioChangeEvent,
    Segmented,
    Select,
    Space,
} from 'antd';
import type {SelectProps} from 'antd';
import styleSFP from "./SecondFormPart.module.css"
import {WarningOutlined} from "@ant-design/icons";

export const SecondFormPart = () => {

    const [valueStatus, setValueStatus] = useState<string | number>('');
    const [value, setValue] = useState(1);
    const [valueWeightsSelect, setValueWeightsSelect] = useState<string[]>([])
    const [valueWeights, setValueWeights] = useState<string[]>([])


    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setValueStatus('Обычный турнир')
    };

    const onChangeStatus = (value: string | number) => {
        setValueStatus(value)
        if (value === 'Рейтинговый турнир') {
            showModal()
        }
    }

    const options: SelectProps['options'] = [];
    for (let i = 40; i <= 130; i++) {
        options.push({
            label: i.toString(),
            value: i.toString(),
        });
    }
    options.push(
        {
            label: 'абс',
            value: 'абс',
        });

    const handleChangeGender = (value: string) => {
        console.log(`selected ${value}`);
    };
    const handleChangeAdults = (value: string) => {
        console.log(`selected ${value}`);
    };
    const handleChangeCategory = (value: string) => {
        console.log(`selected ${value}`);
    };

    const onChangeRadio = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const onChangeHand = (e: RadioChangeEvent) => {
        console.log(`radio checked:${e.target.value}`);
    };

    const handleChangeSelect = (value: string[]) => {
        setValueWeightsSelect(value)
    };

    const handleAcceptButton = () => {
        const updatedValueWeightsSelect = [...valueWeightsSelect];
        const filteredValues = updatedValueWeightsSelect.filter(value => !isNaN(Number(value)));
        const highestValue = Math.max(...filteredValues.map(Number));
        const nonNumericValues = updatedValueWeightsSelect.filter(value => isNaN(Number(value)));
        updatedValueWeightsSelect.length = 0;
        updatedValueWeightsSelect.push(...nonNumericValues, ...filteredValues);

        if (highestValue !== -Infinity) {
            let newValue = `${highestValue}+`;
            updatedValueWeightsSelect.push(newValue);
        }

        let absCategory = updatedValueWeightsSelect.find(value => value === 'абс')

        if (absCategory) {
            const newArray = updatedValueWeightsSelect.filter(value => value !== 'абс').concat('абс')
            setValueWeights(newArray);
            setValueWeightsSelect([])
        } else {
            setValueWeights(updatedValueWeightsSelect)
            setValueWeightsSelect([])
        }


    };

    const sortedValues = [...valueWeightsSelect].sort((a, b) => {
        if (a === 'абс') return -1;
        if (b === 'абс') return 1;
        return Number(a) - Number(b);
    });

    console.log(valueWeightsSelect)
    console.log(valueWeights)
    console.log(valueStatus)

    return (
        <div className={styleSFP.formSecond__contain}>
            <Segmented style={{border: "1px solid rgba(255,255,255,0.51)"}} options={['Рейтинговый турнир', 'Обычный турнир']} value={valueStatus}
                       onChange={onChangeStatus}/>
            <Modal title={<span><WarningOutlined style={{color: "#faad14"}}/> Внимание</span>} open={isModalOpen}
                   onOk={handleOk} onCancel={handleCancel} cancelText={'Отмена'}>

                <p>В рейтинговом турнире могут принимать участие только зарегестрированные спортсмены на данной
                    платформе.</p>
            </Modal>
            <Radio.Group onChange={onChangeRadio} value={value}>
                <Radio value={1}>Двоеборье</Radio>
                <Radio value={2}>Борьба на каждую руку отдельно</Radio>
            </Radio.Group>
            {value === 2 && <Radio.Group onChange={onChangeHand} defaultValue={value === 2 ? "right" : ''}>
                <Radio.Button value="right">Правая рука</Radio.Button>
                <Radio.Button value="left">Левая рука</Radio.Button>
            </Radio.Group>}
            <div className={styleSFP.selectForm__contain}>
                <Select
                    placeholder={'Пол'}
                    style={{width: 70}}
                    onChange={handleChangeGender}
                    options={[
                        {value: 'male', label: 'муж'},
                        {value: 'female', label: 'жен'},
                    ]}
                />
                <Select
                    placeholder={'Возраст'}
                    style={{width: 110}}
                    onChange={handleChangeAdults}
                    options={[
                        {value: 'adults', label: 'Взрослые'},
                        {value: '14-15', label: '14-15'},
                        {value: '16-18', label: '16-18'},
                        {value: '19-21', label: '19-21'},
                        {value: '22+', label: '22+'},
                        {value: '40+', label: '40+'},
                        {value: '50+', label: '50+'},
                        {value: '60+', label: '60+'},
                    ]}
                />
                <Select
                    placeholder={'Категория'}
                    style={{width: 160}}
                    onChange={handleChangeCategory}
                    options={[
                        {value: 'common', label: 'Общая'},
                        {value: 'amateurs', label: 'Любители'},
                        {value: 'professionals', label: 'Профессионалы'},
                        {value: 'disabledPeople', label: 'Инвалиды'},
                        {value: 'disabledPeople(VIS)', label: 'Инвалиды(VIS)'},
                        {value: 'disabledPeople(STAND)', label: 'Инвалиды(STAND)'},
                        {value: 'disabledPeople(SIT)', label: 'Инвалиды(SIT)'},

                    ]}
                />
            </div>
            <Space style={{width: '100%'}} direction="vertical">
                <Select
                    mode="multiple"
                    allowClear
                    style={{width: '100%'}}
                    placeholder="Выберете весовые категории"
                    value={sortedValues}
                    onChange={handleChangeSelect}
                    options={options}
                />
            </Space>
            <Button onClick={handleAcceptButton}>Добавить</Button>
            <div>{valueWeights.map((w, index) => <div key={index}>{w}</div>)}</div>
        </div>

    )
}