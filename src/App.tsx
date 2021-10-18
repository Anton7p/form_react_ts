import React, { useState } from 'react';
import style from './App.module.scss';
import Form from './components/global/Form';
import DataFormOutput from './components/global/DataFormOutput';

import { User } from './utils/types/types';

function App() {
	const [userData, setUserData] = useState<User>();
	const [url, setUrl] = useState<string>('')
	return (
		<div className={'_container'}>
			<div className={style.app}>
				<Form showUserData={setUserData}  setUrl={setUrl}/>
				<DataFormOutput user={userData} url={url} setUrl={setUrl} />
			</div>
		</div>
	);
}

export default App;
