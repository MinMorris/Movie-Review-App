import React from 'react';
import { Button, Form } from 'react-bootstrap';

export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userReview: '',
    };
    this.submitReview = this.submitReview.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  resetReview() {
    this.setState({
      userReview: '',
    });
  }

  submitReview() {
    this.props.onFormSubmit(this.state);
    console.log(this.state.userReview); 
    this.resetReview();
  }

  handleChange(e) {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <Form className="reviewForm">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label></Form.Label>
          <Form.Control
            as="textarea"
            name="userReview"
            placeholder="What did you think of the movie?"
            rows={3}
            value={this.state.userReview}
            onChange={this.handleChange}
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="primary" active size="lg" onClick={this.submitReview}>
            Submit Review
          </Button>
        </div>
        <input type="hidden" name="movieId" id="movieId" value={this.props.movieId} />
        <input type="hidden" id="showMovieId" placeholder={this.props.movieId} />
      </Form>
    );
  }
}