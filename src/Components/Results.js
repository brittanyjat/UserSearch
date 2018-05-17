import React from 'react';
import { connect } from 'react-redux';

function Results(props) {
    console.log(props)
    return (
        <div>
            Results
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        results: state.results
    }
}

export default connect(mapStateToProps, null)(Results);