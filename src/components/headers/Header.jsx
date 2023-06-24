function Header () {
    return (
        <header id="header" className="flex  h-[93px]">
            <div>
                123
            </div>
            <ul>
                <li>
                    Главная
                </li>
                <li>
                    Тарифы
                </li>
                <li>
                    FAQ
                </li>
            </ul>
            <div id="regOrSign">
                <ul>
                    <li>
                        Зарегистрироваться
                    </li>
                    <svg width="2" height="26" viewBox="0 0 2 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.6" width="2" height="26" transform="matrix(-1 0 0 1 2 0)" fill="#029491"/>
                    </svg>
                    <button>
                        Войти
                    </button>
                </ul>
            </div>
        </header>
    );
}


export default Header;