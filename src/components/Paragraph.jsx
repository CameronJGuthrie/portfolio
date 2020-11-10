import { Paper, Typography } from "@material-ui/core";
import Col from "./Col";

const Paragraph = (props) => {
  const date = (props.date === undefined) ? '' : <b>{props.date}</b>;

  return(
    <Paper style={{padding: '7px', marginBottom: '10px', background:'#e4e4e4'}}>
      <Col>
        <Typography>
          {date}
        </Typography>
        <Typography>
          {props.children}
        </Typography>
      </Col>
    </Paper>
  )
}

export default Paragraph;