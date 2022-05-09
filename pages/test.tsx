import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
export default class Page extends React.Component {
    render() {
        return (
        <div className="testCardContainer">
        <div className="testCardFront">
        Hello world
        </div>
        <div className="testCardBack">
        world hello
        </div>

            
        </div>
        )}
}