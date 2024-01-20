import {memo} from 'react';

function Title({style, children}) {
  console.log('Title Rendered', style)

  return <h1 style={style}>{children}</h1>
}

export default memo(Title);
