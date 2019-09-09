import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
// import cards from "../mockData/mockProjects";
import Swiper from "react-native-deck-swiper";
import { getProjectBatch } from "../contractorApiCalls";


class ProjectSwiper extends Component {
  state = {
    cards: [],
    cardIndex: 0,
    swipedAllCards: false
  };

  async componentDidMount() {
    const cards = await getProjectBatch(
      this.props.navigation.getParam("contractorId")
    );
    await this.setState({ cards });
  }

  onChange(e) {
    e.preventDefault();
    this.setState({ [e.target.value]: e.target.value });
  }

  renderCard = (card, index) => {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>{card.title}</Text>
        <Image style={styles.image} source={card.uri} />
        <Text style={styles.tag}>#{card.specialty}</Text>
        <Text style={styles.description}>{card.description}</Text>
      </View>
    );
  };

  onSwiped = (type, index) => {
    console.log(index);
    if (type === "left") {
      console.log(type);
      // do nothing
    } else {
      console.log(type);
      // send api call to add contractor to project
    }
    // console.log(`on swiped ${type}`)
  };

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true
    });
  };

  render() {
    return (
      <View style={styles.screen}>
        {this.state.cards.length > 0 && <Swiper
          paddingBottom={100}
          backgroundColor="#white"
          ref={swiper => {
            this.swiper = swiper;
          }}
          onSwiped={index => this.onSwiped("general", index)}
          onSwipedLeft={index => this.onSwiped("left", index)}
          onSwipedRight={index => this.onSwiped("right", index)}
          onSwipedTop={index => this.onSwiped("top", index)}
          onSwipedBottom={index => this.onSwiped("bottom", index)}
          onTapCard={this.swipeLeft}
          cards={this.state.cards}
          cardIndex={this.state.cardIndex}
          cardVerticalMargin={10}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
          stackSize={3}
          infinite={true}
          stackSeparation={15}
          overlayLabels={{
            bottom: {
              title: "NOPE",
              style: {
                label: {
                  backgroundColor: "black",
                  borderColor: "black",
                  color: "white",
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                }
              }
            },
            left: {
              title: "NOPE",
              style: {
                label: {
                  backgroundColor: "black",
                  borderColor: "black",
                  color: "white",
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  marginTop: 30,
                  marginLeft: -30
                }
              }
            },
            right: {
              title: "LIKE",
              style: {
                label: {
                  backgroundColor: "black",
                  borderColor: "black",
                  color: "white",
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  marginTop: 30,
                  marginLeft: 30
                }
              }
            },
            top: {
              title: "LIKE",
              style: {
                label: {
                  backgroundColor: "black",
                  borderColor: "black",
                  color: "white",
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                }
              }
            }
          }}
          animateOverlayLabelsOpacity
          animateCardOpacity
          swipeBackCard
        />}
        <View style={styles.swiperButtonsWrapper}>
          <TouchableOpacity
            onPress={left => this.onSwiped("left")}
            style={styles.swiperButtonOutline}
          >
            <Image source={require("../assets/reject.png")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={right => this.onSwiped("right")}
            style={styles.swiperButtonOutline}
          >
            <Image source={require("../assets/accept.png")} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  card: {
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    margin: "auto",
    height: "65%",
    paddingHorizontal: 10,
    marginTop: 50,
    borderRadius: 20
  },
  image: {
    width: "100%",
    height: "50%",
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 0.75,
    borderColor: "black",
    marginBottom: 20
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.75,
    borderColor: "black",
    backgroundColor: "black",
    backgroundColor: "#7C9EB2",
    width: "100%",
    height: 50
  },
  description: {
    width: "100%",
    textAlign: "left",
    fontSize: 20
  },
  tag: {
    width: "100%",
    textAlign: "left",
    marginBottom: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 20
  },
  swiperButtonsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
    width: "60%"
  },
  swiperButtonOutline: {
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 48,
    padding: 10,
    opacity: .8
  }
});

export default ProjectSwiper;
