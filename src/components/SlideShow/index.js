import React, { Component } from "react";
import { Image, Text } from "@sitecore-jss/sitecore-jss-react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

const SlideShowForRealHumans = ({ key, item }) => (
  <div className="row">
    <div className="col">
      <Text field={item.fields.caption} />
      <Image field={item.fields.image} width={700} />
    </div>
  </div>
);

class SlideShow extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === this.items().length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.items().length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  items() {
    return this.props.fields.slides;
  }

  render() {
    debugger;
    const { activeIndex } = this.state;
    const items = this.items();
    const isPageEditing = this.props.context.pageEditing;

    if (isPageEditing) {
      return items.map((item, index) => 
              <SlideShowForRealHumans key={index} item={item} />);
    }

    const slides = items.map((item, index) => {
      const { image, caption } = item.fields;
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={index}
        >
          <Image field={image} width={700} />
          <CarouselCaption
            captionText={caption.value}
            captionHeader={caption.value}
          />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default SlideShow;
