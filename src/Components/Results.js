import React from 'react';
import { connect } from 'react-redux';
import ResultDisplay from './ResultDisplay';

function Results(props) {
    const { results, loading, searching } = props;
    return (
        <div>
            {
                !loading && searching
                    ? <ResultDisplay results={results} />
                    : null
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        results: state.results,
        loading: state.loading,
        searching: state.searching
    }
}

export default connect(mapStateToProps, null)(Results);