import { BlueButton, MainButton } from "@/components/buttons/button";
import BaseInput from "@/components/inputs/base-input";
import TagedInput from "@/components/inputs/taged-input";
import Image from "next/image";

export default function Home() {


  const tags1 = ['Константин Константинопольский']

  return (
    <section className="w-full flex flex-col">
      <article className="flex justify-between items-center w-full h-[66px]">
        <div className="flex gap-4">
          <h2 className="font-monserat text-itg-700 text-xl/8 font-[400]">
            Подзадача
          </h2>
          <MainButton>Создать</MainButton>
        </div>

        <div className="flex gap-1">
          <BlueButton>Сохранить</BlueButton>
          <MainButton>Сохранить и выйти</MainButton>
        </div>
      </article>

      <article className="flex flex-col gap-5">
        <h1 className=" line-clamp-1 font-monserat text-itg-700 text-2xl/8 font-semibold break-all">
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
            <TagedInput only label="Ответственные" tags={ ['Support Group']} />
          </Split>
          <Split>
            <BaseInput label="Комментарии"/>
          </Split>
          <Split>
            <TagedInput label="Согласующие" tags={ ['Андрей Пивоваров', 'Максим Галактионов', 'Алла Лин', 'Константин Константинопольский Константинович', 'Игорь Иванченко', 'Юлия Эйчаровна', 'Артём Подпрыгайко-Саппортов', 'Илья Вазнец', 'Михаил Вортенов', 'Наталья Нашевна', 'Евгения Итамовна', 'Алиса Киральчук']} />
          </Split>
          <Split>
            <TagedInput only label="Кем открыто" tags={ ['Андрей Пивоваров']} />
            <TagedInput only label="Кем создано" tags={ ['Андрей Пивоваров']} />
          </Split>
          
        </form>
      </article>

    </section>
  );
}

function Split({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap w-full justify-between gap-4 ">
      { children }
    </div>
  )
}