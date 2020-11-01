import React, { Component } from 'react';

class Experience extends Component {
    render() {
        return (
            <div>
                <h1>Experience</h1>
                <h2>Prime Digital Academy</h2>

                {/* Solo Project */}
                <h4>Solo Project</h4>
                <p>
                    I love football, and I am constantly practicing with my younger brother to improve his game.
                    Due to the fact that he is in 7th grade, there isn't a great way to track statistics.
                    So, I created an application called <i>smolGame</i> that allows coaches to track statistics game by game, and store basic information about each player.
                    Additionally, players of the team can always know how the team has been performing on the field at their fingertips.
                </p>

                {/* Group Project */}
                <h4>Group Project (in progress)</h4>
                <p>
                    My team is creating additional functionalities for a non-profit company called <a href="https://blackignite.com/"><i>Black Ignite</i></a>.
                    One functionality would include an Admin Dashboard, and some Tooling and Automation.
                </p>
            </div>
        );
    }
}

export default Experience