import React from 'react';
import { connect } from 'react-redux';
// import * as actionTypes from '../../store/actions/actions';

const paging = (props) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(props.products.length / props.productsPerPage); i++) {
        pageNumbers.push(i)
    }
    const pageNumbersList = pageNumbers.map(number => {
        return (
            <div onClick={(event) => { props.onChange(Number(event.target.textContent)) }} key={number} className="paging__number">{number}</div>
        )
    })
    return (
        <>
            <div className="paging">
                <div className="paging__arrow"  onClick={() => { props.onDecrease() }}>
                    <i className="fas fa-angle-left"></i>
                </div>
                {pageNumbersList}
                <div className="paging__arrow"  onClick={() => { props.onIncrease() }}>
                    <i className="fas fa-angle-right"></i>
                </div>
            </div>
        </>
    )
}
// const mapStateToProps = state => {
//     return {
//         products: state.products,
//         currentPage: state.currentPage,
//         productsPerPage: state.productsPerPage
//     }
// }
// const mapDispatchToProps = dispatch => {
//     return {
//         onChange: (currentPage) => dispatch({ type: actionTypes.CHANGE, currentPage: currentPage }),
//         onIncrease: () => dispatch({ type: actionTypes.INCREASE}),
//         onDecrease: () => dispatch({ type: actionTypes.DECREASE})


//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(paging);
export default paging;