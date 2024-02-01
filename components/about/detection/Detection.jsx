import texts from "../../../data/texts.json";
import { Article, SpanItem, Item } from "./Detection.styled";

export const Detection = () => {
  return (
    <Article>
      <Item>{texts.about.detection.para1}</Item>
      <Item>{texts.about.detection.para2}</Item>
      <Item>
        <SpanItem>{texts.about.detection.spanPara3}</SpanItem>
        {texts.about.detection.para3}
      </Item>
      <Item>
        <SpanItem>{texts.about.detection.spanPara4}</SpanItem>
        {texts.about.detection.para4}
      </Item>
      <Item>
        <SpanItem>{texts.about.detection.spanPara5}</SpanItem>
        {texts.about.detection.para5}
      </Item>
      <Item>{texts.about.detection.para6}</Item>
    </Article>
  );
};
