import React from 'react'

import MyPicker from './ColourPicker'

export const ColourPickerGroup = () => {
  const handleColorChange = ({ hex }) => console.log(hex)

  return (
      <div className="container">
            <form>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="backgroundColourPicker">Background Colour</label>
                            <input type="email" className="form-control" id="backgroundColourPicker" ref="colourpicker"/>
                            <MyPicker
                                color="orange"
                                onChangeComplete={ handleColorChange }
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="backgroundColourPicker">Foreground Colour</label>
                            <input type="email" className="form-control" id="backgroundColourPicker"/>
                            <MyPicker
                                color="orange"
                                onChangeComplete={ handleColorChange }
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
  )
}

export default ColourPickerGroup