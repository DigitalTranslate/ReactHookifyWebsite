import Highlight from 'react-highlight.js'
import Container from '@material-ui/core/Container'
import ClassToFunction from './examples/ClassToFunction'
import StateToUseState from './examples/StateToUseState'
import SetState from './examples/SetState'
import LifeCycleToUseEffect from './examples/LifeCycleToUseEffect'

export default function Translations() {
  return (
    <div id="translations">
      <h2>Examples</h2>
      <hr />
      <div id="translation_class">
        <ClassToFunction />
        <StateToUseState />
        <SetState />
        <LifeCycleToUseEffect />
      </div>
    </div>
  )
}
