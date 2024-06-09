import React, {useState} from "react";
import {
    Switch,
    Form,
    Select,
    InputNumberProps,
    Input,
    Radio,
    RadioChangeEvent
} from "antd";
import style from "../Registration.module.css"
import {optionsAthleteQualification, optionsRefereeCategory} from "./Qualifications";


export const StepTwo = () => {

    const [athlete, setAthlete] = useState<boolean>(false)
    const [referee, setReferee] = useState<boolean>(false)
    const [organizer, setOrganizer] = useState<boolean>(false)

    const onChange: InputNumberProps['onChange'] = (value) => {
        console.log('changed', value);
    };

    const onChangeRadio = (e: RadioChangeEvent) => {
        console.log(`radio checked:${e.target.value}`);
    };

    return (
        <>
            <div className={style.switchStepTwoContainer}>
                <Form.Item label="Зарегистрироваться как спортсмен" valuePropName="athlete">
                    <Switch onClick={() => setAthlete(!athlete)}/>
                    {athlete &&
                        <>
                            <p className={style.description}>
                                Регистрируясь как спортсмен вы получаете 1000 очков рейтинга, которые будут изменяться
                                при участии в рейтинговых турнирах на данной платформе. Все ваши победы, поражения, участие в турнирах
                                будут учитываться и отображаться в личном кабинете.
                            </p>
                            Ваш спортивный разряд:    <Select options={optionsAthleteQualification}
                                                              style={{width:"100px", marginTop: "10px"}}
                                                              defaultValue={optionsAthleteQualification[0].label}/>
                        </>

                    }
                </Form.Item>

                <Form.Item label="Зарегистрироваться как судья" valuePropName="referee">
                    <Switch onClick={() => setReferee(!referee)}/>
                    {referee &&
                        <div>
                            <>
                                <p className={style.description}>
                                    Регистрируясь как судья вы получаете возможность судить рейтинговые турниры, получать приглашения от
                                    организаторов. Вся ваша активность, такая как: кол-во поединков и соревнований, которые вы судили
                                    на данной платформе будет отображаться в вашем личном кабинете.
                                </p>
                                Ваша судейская категория:    <Select options={optionsRefereeCategory}
                                                                  style={{width:"100px", marginTop: "10px"}}
                                                                  defaultValue={optionsRefereeCategory[0].label}/>
                            </>

                        </div>
                    }
                </Form.Item>

                <Form.Item label="Зарегистрироваться как организатор" valuePropName="organizer">
                    <Switch onClick={() => setOrganizer(!organizer)}/>
                    {organizer &&
                        <>
                            <p className={style.description}>
                                Регистрируясь как организатор вы сможете создавать на данной платформе турниры, анонсы, отправлять приглашения
                                спортсменам и судьям для участия в ваших соревнованиях, получать всю необходимую статистику.<br/>
                                <b style={{color:"red"}}>Важно!</b> Для получения статуса <b>"ОРГАНИЗАТОР"</b>, необходимо получить со стороны
                                разработчиков подтверждение. Для этого укажите организацию/сообщество/федерацию/личность и приблизительное кол-во турниров
                                проведенное вами.
                            </p>
                            <div className={style.organizerContain}>
                                <div>Организатор: <Input style={{width:"300px", marginTop: "10px", marginLeft: "5px"}}/></div>
                                <div> Проведенные турниры: <Radio.Group onChange={onChangeRadio} defaultValue="a" style={{marginTop: "10px", marginLeft: "5px"}}>
                                    <Radio.Button value="a">Менее 10</Radio.Button>
                                    <Radio.Button value="b">От 10 до 50</Radio.Button>
                                    <Radio.Button value="c">Более 50</Radio.Button>
                                </Radio.Group></div>
                            </div>

                        </>

                    }
                </Form.Item>
            </div>

        </>

    )
}