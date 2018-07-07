import React, { PureComponent } from 'react'

class PageCount extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {}
    }
    static defaultProps = {
        defaultPageCountArray: [10, 20, 30, 40, 50, 60, 80, 100]
    }
    pageCountChange = (e) => {
        this.props.handleMoviePageCountChange(e.target.value)
    }
    render() {
        console.log('PageCount -> render')
        return (
            <div style={{marginTop: 50}}>
                <span style={{fontSize: 16, fontWeight: 'bold'}}>{"   "}Page Size:{"   "}</span>
                <select name="defaultPagination" id="defaultPagination" onChange={this.pageCountChange} defaultValue={this.props.moviePageCount}>
                    {this.props.defaultPageCountArray.map((item, index) => {
                        return (
                            <option value={item} key={index} style={{fontSize: 20, fontWeight: 'bold'}}>
                                {item}
                            </option>
                        )
                    })}
                </select>
            </div>
        )
    }
}

export default PageCount
