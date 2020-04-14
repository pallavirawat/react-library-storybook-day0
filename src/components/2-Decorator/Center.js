import React from 'react'

function Center({ children }) {
  const styles = {
    textAlign: 'center',
  }

  return <div style={styles}>{children}</div>
}

export default Center
