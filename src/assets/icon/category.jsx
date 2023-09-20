import React from 'react'

const category = (props) => {
    const {width, height, fill} = props;
  return (
    <svg width={width} height={height} fill={fill} clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m18.891 19.498h-13.782l-1.52-9.501h16.823zm-14.306-12.506h14.868l-.227 1.506h-14.415zm.993-2.494h12.882l-.13.983h-12.623zm16.421 4.998c0-.558-.456-.998-1.001-.998h-.253c.309-2.064.289-1.911.289-2.009 0-.58-.469-1.008-1-1.008h-.189c.193-1.461.187-1.399.187-1.482 0-.671-.575-1.001-1.001-1.001h-14.024c-.536 0-1.001.433-1.001 1 0 .083-.008.013.188 1.483h-.19c-.524 0-1.001.422-1.001 1.007 0 .101-.016-.027.29 2.01h-.291c-.569 0-1.001.464-1.001.999 0 .118-.105-.582 1.694 10.659.077.486.496.842.988.842h14.635c.492 0 .911-.356.988-.842 1.801-11.25 1.693-10.54 1.693-10.66z" fill-rule="nonzero"/></svg>
  )
}

export default category;