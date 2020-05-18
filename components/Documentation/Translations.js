import Highlight from 'react-highlight.js';
import Container from '@material-ui/core/Container';
import ClassToFunction from './examples/ClassToFunction';
import StateToUseState from './examples/StateToUseState';
import SetState from './examples/SetState';
import LifeCycleToUseEffect from './examples/LifeCycleToUseEffect';

export default function Translations() {
  return (
    <div id="translations">
      <h2>How Hookify Works</h2>
      <hr />
      <div id="translation_class">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et
          tincidunt purus. Curabitur tincidunt enim nec nisi accumsan
          ullamcorper. Maecenas at massa vel sapien feugiat eleifend in non
          massa. Maecenas tincidunt libero vel orci dapibus posuere. Suspendisse
          fringilla vulputate ante non condimentum. Proin lectus magna, luctus
          quis lectus id, ornare condimentum nisi. Suspendisse efficitur turpis
          erat, vitae placerat mauris luctus vitae. Suspendisse sit amet felis
          at lacus aliquet fringilla accumsan et enim. Sed a ex nec nibh
          hendrerit gravida.
        </p>
        <ClassToFunction />
        <StateToUseState />
        <SetState />
        <LifeCycleToUseEffect />
      </div>
    </div>
  );
}
