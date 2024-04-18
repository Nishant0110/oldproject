import react, { Suspense } from 'react';
import ErrorBoundry from './assets/Component/ErrorBoundry';

const LazyComp = react.lazy(() => import("../src/assets/Component/LazyComp"));

export default function App() {
  return (
    <ErrorBoundry>
      <Suspense fallback={<p>Loading</p>}>
        <LazyComp />
      </Suspense>
    </ErrorBoundry>
  )
}
