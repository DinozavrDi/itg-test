'use client'

import { useState } from "react"
import { BlueButton, MainButton } from "../buttons/button"
import { Modal } from "@mui/material"
import { Split } from "@/app/page"
import DateInput from "../inputs/date-input"
import TagedInput from "../inputs/taged-input"
import BaseInput from "../inputs/base-input"
import IconButton from "../buttons/icon-button"

function TaskModal() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
          <MainButton onClick={() => setIsOpen(true)}>
              Создать
          </MainButton>
          <Modal className="flex justify-center items-start md:pt-5 overflow-y-auto"  open={isOpen} onClose={() => setIsOpen(false)}>
            <div className="max-w-[800px] w-full bg-white rounded  gap-5 flex flex-col ">
              <div className="flex gap-4 justify-between items-center w-full px-4 py-4 border-b-[1px] border-itg-200 border-solid ">
                <h2 className="font-monserat text-itg-700 md:text-xl/8 text-sm font-[400] uppercase md:normal-case">
                  Подзадача
                </h2>
                <div className="gap-1 hidden md:flex">
                  <BlueButton>Сохранить</BlueButton>
                  <MainButton>Сохранить и выйти</MainButton>
                </div>
                <div className="gap-1 flex md:hidden">
                  <IconButton src="/svg/buttons/close.svg" onClick={() => setIsOpen(false)}/>
                </div>
              </div>


              <article className="flex flex-col gap-5 px-4 p-4">
                <h1 className=" line-clamp-1 font-monserat text-itg-700 text-2xl/8 font-semibold break-all ">
                  STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller
                </h1>
                <form className="flex gap-5 flex-wrap">
                  <Split>
                    <BaseInput label="Тема" required/>
                    <BaseInput label="Статус"/>
                  </Split>
                  <Split>
                    <BaseInput label="Описание"/>
                    <BaseInput label="Продукт"/>
                  </Split>
                  <Split>
                    <BaseInput label="Рабочие заметки" required/>
                    <BaseInput label="Приоритет"/>
                  </Split>
                  <Split>
                    <TagedInput only label="Ответственные" tags={ ['Константин Константинопольский']} />
                    <TagedInput only label="Группа" tags={ ['Support Group']} />
                  </Split>
                  <Split>
                    <BaseInput label="Комментарии"/>
                  </Split>
                  <Split>
                    <TagedInput label="Согласующие" tags={ ['Андрей Пивоваров', 'Максим Галактионов', 'Алла Лин', 'Константин Константинопольский Константинович', 'Игорь Иванченко', 'Юлия Эйчаровна', 'Артём Подпрыгайко-Саппортов', 'Илья Вазнец', 'Михаил Вортенов', 'Наталья Нашевна', 'Евгения Итамовна', 'Алиса Киральчук']} />
                  </Split>
                  <Split>
                    <DateInput label="Когда открыто"/>
                    <DateInput label="Когда создано"/>
                  </Split>
                  <Split>
                    <TagedInput only label="Кем открыто" tags={ ['Андрей Пивоваров']} />
                    <TagedInput only label="Кем создано" tags={ ['Андрей Пивоваров']} />
                  </Split>
                  
                </form>
              </article>
            </div>

          </Modal>
        </>
    )
}

export default TaskModal