import { Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';

export default function InfoItem({ header, value, tooltip, isNotLast }) {
  return (
    <>
      <Row>
        <Col md="3" className="text-truncate">
          <OverlayTrigger
            delay={{ show: 250, hide: 400 }}
            placement="right"
            overlay={
              <Tooltip>{ tooltip }</Tooltip>
            }
          >
            <i className="bi bi-question-circle me-2"></i>
          </OverlayTrigger>
          <span>{ header }</span>
        </Col>
        <Col md="9" className="text-truncate" dangerouslySetInnerHTML={{__html: value ? value : '-'}}></Col>
      </Row>
      {isNotLast && <hr className="hr-space" />}
    </>
  );
}
