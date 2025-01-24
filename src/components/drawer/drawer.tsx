import Image from "next/image"
import NavButton from "./nav-button"
import IconButton from "../buttons/icon-button"

function Drawer() {

    // Этот массив можно переделать в массив объектов с ссылками на страницы
    const navs = ['Моя работа', 'Структура портала', 'Личное расписание', 'Отсутсвие на рабочем месте', 'Портфель услуг', 'Дашборды', 'Доски задач', 'Обращениея', 'События', 'Инциденты', 'Проблемы', 'Настройка каталогов', 'Запросы на обслуживание', 'Запросы на изменение', 'Управление конфигурациями', 'Управление уровнем услуг', 'Настройка соответсвий']


    return (
        <nav className="flex border-r-[1px] border-solid border-itg-200 min-h-[95vh]">
            <div className="flex flex-col items-center gap-5 w-[56px] border-r-[1px] border-itg-200 border-solid py-5 ">
                <button>
                    <Image src={'/svg/buttons/sidebar.svg'} width={20} height={20} alt="sidebar"/>
                </button>
                <button>
                    <Image src={'/svg/buttons/star.svg'} width={20} height={20} alt="star"/>
                </button>
            </div>
            <div>
                <div className="p-4 border-b-[1px] border-solid border-itg-200 flex gap-2">
                    <input placeholder="Поиск" className="px-1 rounded border-[1px] border-itg-200 border-solid py-1"/>
                    <IconButton src="/svg/buttons/no-pin.svg"/>
                </div>
                <div className="flex flex-col gap-3 bg-itg-100 p-4">
                    {
                        navs.map((nav, i) => <NavButton key={i}>{nav}</NavButton>)
                    }
                </div>
            </div>
        </nav>
    )
}


export default Drawer