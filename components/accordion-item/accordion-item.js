import AccordionItemStyle from "./accordion-item.module.css";
import {BsChatSquareDotsFill, BsFillArchiveFill, BsFillGridFill} from "react-icons/bs";

export default function AccordionItem() {
  return (
    <div className={AccordionItemStyle.accordionItem}>
      <div className={`${AccordionItemStyle.accordionItemDiv} ${AccordionItemStyle.accordionItemIcon}`}>
        <BsChatSquareDotsFill size={'1.7em'} />
      </div>
      <div className={`${AccordionItemStyle.accordionItemDiv} ${AccordionItemStyle.accordionItemMainDiv}`}>
        <h4><a href="#">Cars</a></h4>
        <div>
          <div>
            <a href="#"><span><BsFillGridFill/></span>Adam</a>
          </div>
          <div>
            <a href="#"><span><BsFillGridFill/></span>Adam</a>
          </div>

        </div>
      </div>
      <div className={`${AccordionItemStyle.accordionItemInfo} ${AccordionItemStyle.accordionItemDiv}`}>
        <div>
          <p>25 362 Topics</p>
          <p>611 179 Replies</p>
        </div>
      </div>
      <div className={`${AccordionItemStyle.accordionItemLastPost} ${AccordionItemStyle.accordionItemDiv}`}>
        <div className={AccordionItemStyle.accordionItemLastIcon}>
          <BsFillArchiveFill size={"1.7rem"}></BsFillArchiveFill>
        </div>
        <div className={AccordionItemStyle.accordionItemLastText}>
          <p>Answers of experienced astrologers, ...</p>
          <p>Author: Butthurt999</p>
          <p>Yesterday, 22:30</p>
        </div>
      </div>
    </div>
  )
}