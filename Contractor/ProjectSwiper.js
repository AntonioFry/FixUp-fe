import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Swiper from "react-native-deck-swiper";
import { getProjectBatch, patchContractorProject } from "../contractorApiCalls";

class ProjectSwiper extends Component {
  state = {
    cards: [],
    cardIndex: 0,
    swipedAllCards: false,
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const contractorId = this.props.navigation.getParam("contractorId");
    const cards = await getProjectBatch(contractorId);
    this.setState({ cards, loading: false });
  }

  onChange(e) {
    e.preventDefault();
    this.setState({ [e.target.value]: e.target.value });
  }

  renderCard = (card, index) => {
    const base64image = `data:image/jpg;base64,${card.user_before_picture}`;
    return (
      <View style={styles.card}>
        <Text style={styles.title}>{card.title}</Text>
        <Image style={styles.image} source={{ uri: base64image }} />
        <Text style={styles.tag}>#{card.category}</Text>
        <Text style={styles.description}>{card.description}</Text>
      </View>
    );
  };

  onSwiped = async (type, index) => {
    const contractorId = this.props.navigation.getParam("contractorId");
    const projectId = this.state.cards[index].id;
    if (type === "left" || type === "bottom") {
      await patchContractorProject(contractorId, projectId, 1);
    }
    if (type === "right" || type === "top") {
      await patchContractorProject(contractorId, projectId, 2);
    }
  };

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true
    });
  };

  render() {
    return (
      <View>
        {this.state.loading && (
          <View style={styles.loadingWrapper}>
            <Image source={require("../assets/gears.gif")} />
          </View>
        )}
        {!this.state.loading && (
          <View style={styles.screen}>
            {this.state.cards.length > 0 && (
              <Swiper
                paddingBottom={100}
                backgroundColor="#white"
                ref={swiper => {
                  this.swiper = swiper;
                }}
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
                infinite={false}
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
              />
            )}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loadingWrapper: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    margin: "auto",
    height: "70%",
    paddingHorizontal: 10,
    marginTop: 60,
    borderRadius: 20
  },
  image: {
    width: "100%",
    height: "55%",
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 4
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
    fontSize: 16
  },
  tag: {
    width: "100%",
    textAlign: "left",
    marginBottom: 20,
    color: "#7C9EB2"
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 10
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
    opacity: 0.8
  }
});

export default ProjectSwiper;
