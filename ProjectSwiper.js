import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import cards from './data';
import Swiper from 'react-native-deck-swiper';

export default class App extends Component {

  onChange(e) {
    e.preventDefault();
    this.setState({ [e.target.value]: e.target.value })
  }

  renderCard = (card, index) => {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>{card.title}</Text>
        <Image style={styles.image} source={card.uri} />
        <Text style={styles.tag}>#{card.specialty}</Text>
        <Text style={styles.description}>{card.description}</Text>
      </View>
    )
  };

  onSwiped = (type) => {
    console.log(`on swiped ${type}`)
  }

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true
    })
  };

  swipeLeft = () => {
    this.swiper.swipeLeft()
  };

  render() {
    return (
      <View style={styles.screen}>
        <Swiper
          backgroundColor="#F7F0F5"
          ref={swiper => {
            this.swiper = swiper
          }}
          onSwiped={() => this.onSwiped('general')}
          onSwipedLeft={() => this.onSwiped('left')}
          onSwipedRight={() => this.onSwiped('right')}
          onSwipedTop={() => this.onSwiped('top')}
          onSwipedBottom={() => this.onSwiped('bottom')}
          onTapCard={this.swipeLeft}
          cards={cards}
          cardIndex={this.state.cardIndex}
          cardVerticalMargin={80}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
          stackSize={3}
          stackSeparation={15}
          overlayLabels={{
            bottom: {
              title: 'NOPE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }
              }
            },
            left: {
              title: 'NOPE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: -30
                }
              }
            },
            right: {
              title: 'LIKE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: 30
                }
              }
            },
            top: {
              title: 'LIKE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }
              }
            }
          }}
          animateOverlayLabelsOpacity
          animateCardOpacity
          swipeBackCard
        />
        {/* </View> */}

        <TouchableOpacity style={styles.button} onPress={() => this.swiper.swipeBack()} title='Swipe Back'>
          <Text>Swipe Back</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: "flex-end",
    borderStyle: 'solid',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    width: "100%",
    height: "100%",
    paddingBottom: 100,
  },
  card: {
    backgroundColor: "#F7F0F5",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    borderStyle: 'solid',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    width: "100%",
    margin: 'auto',
    height: "90%",
    paddingHorizontal: 10,
  },
  image: {
    width: "100%",
    height: "50%",
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 0.75,
    borderColor: 'black',
    marginBottom: 20,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.75,
    borderColor: 'black',
    backgroundColor: "black",
    backgroundColor: "#7C9EB2",
    width: "100%",
    height: 50,
  },
  description: {
    width: "100%",
    textAlign: "left",
    fontSize: 20,
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
  }
});