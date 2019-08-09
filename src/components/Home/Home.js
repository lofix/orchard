import React from 'react';
import ModuleOverview from '../ModuleOverview/ModuleOverview';
import Auxi from '../../hoc/Auxi/Auxi';

const home = (props) => {
  return (
    <Auxi>
      <ModuleOverview 
        title="Fruit Storage"
        description="Here you can easily add pallets which come to your facility"
        path="/fruit-storage"
      />
      <ModuleOverview 
        title="Sorting"
        description="Here you can easily add new sortings"
        path="/sorting"
      />
      <ModuleOverview 
        title="Shipments"
        description="You shipped some fruit? Great! Here you can register a shipment"
        path="/shipments"
      />
      <ModuleOverview 
        title="Packaging Storage"
        description="New packaging came to your shop? Perfect! Add it here and never lose track"
        path="/packaging"
      />
    </Auxi>
  )
};

export default home;