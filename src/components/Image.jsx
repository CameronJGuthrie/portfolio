import { Paper } from "@material-ui/core";
import Col from "./Col";

const Image = (props) => {
  const date = (props.date === undefined) ? '' : <b>{props.date}</b>;

  return(
    <Paper style={{padding: '7px', marginBottom: '10px', background:'#303030'}}>
      <Col>
        {date}
        {props.children}
      </Col>
    </Paper>
  )
}

export default Image;