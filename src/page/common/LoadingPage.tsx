import { Spinner } from "react-bootstrap";

export default function LoadingPage() {
  return (
    <div id="LoadingPage" className="d-flex align-items-center justify-content-center h-100">
      <Spinner animation="border"></Spinner>
    </div>
  )
}
