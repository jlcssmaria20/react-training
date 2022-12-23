import { render, screen } from '@testing-library/react'
import Feed from './Feed'


describe('Timeline:Feed', () => {
  it('renders a button with a Tweet text', () => {
    render(<Button>Tweet</Button>)

    const button = screen.getByText('Tweet')
    expect(button).toBeInTheDocument()
  })


})
