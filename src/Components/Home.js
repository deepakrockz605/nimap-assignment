import React, { Component } from "react";
import Select from "react-select";

const options = [
  { label: "Cricket", value: "Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard (20-metre) pitch with a wicket at each end, each comprising two bails balanced on three stumps. The batting side scores runs by striking the ball bowled at the wicket with the bat (and running between the wickets), while the bowling and fielding side tries to prevent this (by preventing the ball from leaving the field...."},
  { label: "Football", value: "Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. Unqualified, the word football normally means the form of football that is the most popular where the word is used. Sports commonly called football include association football (known as soccer in some countries); gridiron football (specifically American football or Canadian football); Australian rules football; rugby football (either rugby union or rugby league); and Gaelic football....." },
  { label: "Vollyball", value: "Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team's court under organized rules.[1] It has been a part of the official program of the Summer Olympic Games since Tokyo 1964." },
];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
    };
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <div className="home-wrapper">
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />
        {selectedOption ? <p>{selectedOption.value}</p> : null}
      </div>
    );
  }
}
