import React, { Fragment } from 'react'

// style={ styleBlock}
const styleBlock = {
  textAlign: 'center'
}

const Welcome = () => (
  <>
    <section style={ styleBlock}>
      <br></br>
      <h1>Wecome to &#60;30 </h1>
      <br></br>
      <h5>Sign Up To Use &#60;30</h5>
      <br></br>
      <h6>Once Signed in: </h6>
      <p>Click on <em>"Create"</em> to start your first poem</p>
      <p>The <em>"My Poems"</em> tab shows just your poems</p>
      <p>Under The <em>"My Poems"</em> tab click the <em>"View Poem"</em> button to write</p>
      <p>Click on <em>"Public Poems"</em> to see everyone&apos;s poems</p>
      <p>Click <em>"Change Password"</em> to update your password</p>
      <p>Click <em>"Sign Out"</em> To End Your &#60;30 Session</p>
      <br></br>
      <p>Click On <em>"Home"</em> To See These Instructions Again &#60;30</p>
    </section>
  </>
)

export default Welcome