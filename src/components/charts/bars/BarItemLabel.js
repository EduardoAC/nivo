/*
 * This file is part of the nivo project.
 *
 * (c) 2016 Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

const safeSize = 20

export default class BarItemLabel extends Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
    }

    static defaultProps = {}

    render() {
        const { x: _x, y: _y, width, height, color, value } = this.props

        let x = _x
        let y = _y
        let textX
        let line
        let textAnchor
        if (height < safeSize) {
            textX = -13
            textAnchor = 'end'
            y = _y + height / 2
            line = <line stroke={color} x1={0} x2={-10} y1={0} y2={0} />
        } else {
            textX = 0
            textAnchor = 'middle'
            x = _x + width / 2
            y = _y + height / 2
        }

        return (
            <g transform={`translate(${x},${y})`} className="nivo_bar_legend">
                {line}
                <text x={textX} textAnchor={textAnchor} dy="0.5em">
                    {value}
                </text>
            </g>
        )
    }
}