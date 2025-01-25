import Image from "next/image"
import NavButton from "./nav-button"
import IconButton from "../buttons/icon-button"
import { MenuSearch } from "../inputs/search"

function Drawer() {

    // Этот массив можно переделать в массив объектов с ссылками на страницы
    const navs = ['Моя работа', 'Структура портала', 'Личное расписание', 'Отсутсвие на рабочем месте', 'Портфель услуг', 'Дашборды', 'Доски задач', 'Обращениея', 'События', 'Инциденты', 'Проблемы', 'Настройка каталогов', 'Запросы на обслуживание', 'Запросы на изменение', 'Управление конфигурациями', 'Управление уровнем услуг', 'Настройка соответсвий']


    return (
        <nav className="flex border-r-[1px] border-solid border-itg-200 min-h-[95vh]">
            <div className="flex-col items-center gap-5 w-[56px] border-r-[1px] border-itg-200 border-solid py-5 hidden md:flex ">
                <button>
                    <Image src={'/svg/buttons/sidebar.svg'} width={20} height={20} alt="sidebar"/>
                </button>
                <button>
                    <Image src={'/svg/buttons/star.svg'} width={20} height={20} alt="star"/>
                </button>
            </div>
            <div className="hidden lg:block">
                <div className="p-4 border-b-[1px] border-solid border-itg-200 gap-2 flex h-[64px]">
                    <MenuSearch/>
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