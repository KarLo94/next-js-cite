import styles from './SecondRow.module.scss';
import Image from "next/image";
import { useState } from "react";

const SecondRow = () => {

  const [checked, setChecked] = useState(true);

  return (
    <>
      <div className={`${styles.container} ${styles.subscribe__container}`}>
        <div className={styles.subscribe__text}>
          Получите купон номиналом 500₽ в подарок за подписку
        </div>

        {/* Форма */}
        <div className={styles.subscribe__form}>
          <div className={styles.subscribe__form_input}>
            <div className={styles.tooltip}>
              <span className={styles.tooltipText}>
                Введите действительный адрес электронной почты
              </span>
            </div>
            <div className={styles.input_f}>
              <div className={styles.subscribe__input_container}>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="off"
                  placeholder="Введите ваш e-mail"
                  enterKeyHint=""
                  className={styles.subscribe__input}
                ></input>
              </div>
              <div className={styles.agreement}>
                <label className={styles.check}>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    className={styles.checkbox_main_item}
                  ></input>
                  <span className={styles.check__box}></span>
                  <span className={styles.checkbox_span}>
                    Настоящим даю согласие на рассылку
                  </span>
                </label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className={`${styles.form_btn} ${checked && styles.form_btn_active
              }`}>
            Подписаться
          </button>
        </div>

        {/* Соц сети */}
        <div className={styles.subscribe__social_list}>
          <div className={styles.subscribe__social_list_flex}>
            <div className={styles.subscribe__social_item}>
              <a
                target="_blank"
                href="https://www.youtube.com/user/HoffRussia"
              >
                <Image
                  src="/image-page-footer/youtube.svg"
                  width={24}
                  height={24}
                  alt="YouTube"
                />
              </a>
            </div>
            <div className={styles.subscribe__social_item}>
              <a target="_blank" href="https://vk.com/hoffrus">
                <Image
                  src="/image-page-footer/vk.svg"
                  width={24}
                  height={24}
                  alt="VK"
                />
              </a>
            </div>
            <div className={styles.subscribe__social_item}>
              <a target="_blank" href="https://t.me/hoff_inspiration">
                <Image
                  src="/image-page-footer/telegram.svg"
                  width={24}
                  height={24}
                  alt="Telegram"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SecondRow;