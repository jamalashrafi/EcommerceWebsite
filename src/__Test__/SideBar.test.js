import React from 'react'
import { Router } from 'react-router-dom'
import { render, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import SideBar from "../components/navigation/SideBar";

const renderWithRouter = (component) => {
    const history = createMemoryHistory()
    return { 
    ...render (
    <Router history={history}>
        {component}
    </Router>
    )
  }
}

it('should render the about page', () => {

    const { container, getByTestId } = renderWithRouter(<SideBar />) 
    const navbar = getByTestId('navMain')
    const link = getByTestId('about-link'); 
    expect(navbar).toContainElement(link)
  });

  it('should render the home page', () => {

    const { container, getByTestId } = renderWithRouter(<SideBar />) 
    const navbar = getByTestId('navMain')
    const link = getByTestId('home-link'); 
    expect(navbar).toContainElement(link)
  });

  it('should render the contact page', () => {

    const { container, getByTestId } = renderWithRouter(<SideBar />) 
    const navbar = getByTestId('navMain')
    const link = getByTestId('contact-link'); 
    expect(navbar).toContainElement(link)
  });