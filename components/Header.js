import Link from "next/link";

const Header = () => (
  <div> 
    <div> 
      <div> 
        
        <div>  
          <span> 
            
          </span>
          <span> 
            Калуга
          </span>
          {/* <svg> 

          </svg> */}
        </div>

        <nav> 
          <ul>
            <a href='#'><li>Карьера в Hoff</li></a>
            <a href='#'><li>Hoff №1 в России</li></a>
            <a href='#'><li>Адреса магазинов</li></a>
            <a href='#'><li>Доставка и оплата</li></a>
            <a href='#'><li>Пункты выдачи</li></a>
            <a href='#'><li>Hoff бонус</li></a>
          </ul>
        </nav>

        <div>
          <a href="tel:+74842212453">+7 (484) 221-24-53 </a>
        </div>
      </div>
    </div>



    <div>
      <Link href='/'>Logo</Link>
      <div>
        <button>Каталог</button>
        <button>Комнаты</button>
      </div>
      <nav>
        <a href='#'>Идеи</a>
        <a href='#'>Скидки</a>
        <a href='#'>Услуги</a>
      </nav>
      <div>
        <div>Input</div>
        <button>O</button>
      </div>
      <div>
        <a href='#'>
          <span>Icon</span>
          <div>Избранное</div>
        </a>
        <div>Войти</div>
        <a href='#'>
          <span></span>
          <div>Корзина</div>
        </a>
      </div>
    </div>



  <div>
    <div>
      <div>
        <a href='#'><span>Цены пополам</span></a>
        <a href='#'><span>Товары для дома</span></a>
        <a href='#'><span>Диваны</span></a>
        <a href='#'><span>Кровати</span></a>
        <a href='#'><span>Кухни</span></a>
        <a href='#'><span>Мебель для офиса</span></a>
        <a href='#'><span>Мебель для детской</span></a>
        <a href='#'><span>Ковры</span></a>
        <a href='#'><span>%Акции</span></a>
      </div>
      <button>
        <span>...</span>
      </button>
    </div>
  </div>


  </div>
    
)
 

export default Header;