import cardStyle from './Card.module.css';
import { BsFillChatLeftQuoteFill } from "react-icons/bs";

export default function Card () {
  return (
    <>
      <div>
        <div className={cardStyle.cardTitle}>
          <h3>
            Subsections
          </h3>
        </div>
        <div className={cardStyle.cardItems}>
          <div className={cardStyle.cardItem}>
            <div className={cardStyle.cardItemIcon}>
              <BsFillChatLeftQuoteFill size={"1.7rem"}/>
            </div>
            <div className={cardStyle.cardItemContent}>
              <a href="#">Accident</a>
            </div>
            <div className={cardStyle.cardItemInfo}>
              <p><strong>646</strong> Topics</p>
              <p><strong>23 165</strong> answers</p>
            </div>
          </div>
          <div className={cardStyle.cardItem}>
            <div className={cardStyle.cardItemIcon}>
              <BsFillChatLeftQuoteFill size={"1.7rem"}/>
            </div>
            <div className={cardStyle.cardItemContent}>
              <a href="#">Accident</a>
            </div>
            <div className={cardStyle.cardItemInfo}>
              <p><strong>646</strong> Topics</p>
              <p><strong>23 165</strong> answers</p>
            </div>
          </div>
          <div className={cardStyle.cardItem}>
            <div className={cardStyle.cardItemIcon}>
              <BsFillChatLeftQuoteFill size={"1.7rem"}/>
            </div>
            <div className={cardStyle.cardItemContent}>
              <a href="#">Accident</a>
            </div>
            <div className={cardStyle.cardItemInfo}>
              <p><strong>646</strong> Topics</p>
              <p><strong>23 165</strong> answers</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}