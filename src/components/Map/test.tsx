import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map/>', () => {
  it('should render without any marker', () => {
    render(<Map />)

    screen.logTestingPlaygroundURL()

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const placeOne = {
      id: '1',
      name: 'Petropolis',
      slug: 'petropolis',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const placeTwo = {
      id: '1',
      name: 'Petropolis',
      slug: 'petropolis',
      location: {
        latitude: 129,
        longitude: -50
      }
    }
    render(<Map places={[placeOne]} />)

    expect(screen.getByTitle(/petropolis/i)).toBeInTheDocument()
  })
})
