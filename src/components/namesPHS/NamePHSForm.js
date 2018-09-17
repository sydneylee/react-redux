// import React, {Component} from 'react';
// import * as validator from 'validator';

// class NamePHSForm extends Component {
//     static defaultProps = {};

//     static propTypes = {};

//     state = {
//         fullname: {
//             firstname:'',
//             lastname:'',
//         },
//         password1:'',
//         password2:'',
//         touched:{},
//         errors: {},
//         disabled: true,
//         loading: false,
//     };

//     isDuplicate = (targetValue)=> {
//         return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 if(targetValue === 'aaa'){
//                     resolve(true);
//                 }else{
//                     resolve(false);
//                 }
//             }, 3000);
//         });
//     };
//     isDuplicate2 = (targetValue)=> {
//         return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 if(targetValue === 'bbb'){
//                     resolve(true);
//                 }else{
//                     resolve(false);
//                 }
//             }, 3000);
//         });
//     };

//     // validator library :
//     validate = (targetName, targetValue)=>{
//         const error = {targetName: ''};
//         if(targetName === 'firstname') {
//             if(validator.isEmpty(targetValue))  { error[targetName] = 'should not empty'}
//             else if(!validator.isLength(targetValue, {min: 3, max:5})) { error[targetName] = 'should be 3~5'}
//         }
//         else if(targetName === 'lastname'){
//             if(validator.isEmpty(targetValue))  { error[targetName] = 'should not empty'}
//             else if(!validator.isLength(targetValue, {min: 3, max:5})) { error[targetName] = 'should be 3~5'}
//         }
//         // else if(targetName.indexOf('password')>-1){
//         //     const min = 8, max = 10;
//         //     if(validator.isEmpty(targetValue))  { error[targetName] = 'should not empty'}
//         //     //else if(!validator.isLength(targetValue, {min: min, max:max})) { error[targetName] = `should be $(min)~$(max)`}
//         //     else if(!validator.isLength(targetValue, {min: min, max:max})) { error[targetName] = 'should be 8~10'}
//         //     else if((targetName === 'password1' && this.state.password2 != '' && targetValue != this.state.password2) ||(targetName === 'password2' && this.state.password1 != '' && targetValue != this.state.password1 )){
//         //         error[targetName] = 'should be same';
//         //     }
//         // }
//         else if(targetName === 'password1'){
//             const min = 8, max = 10;
//             if(validator.isEmpty(targetValue))  { error[targetName] = 'should not empty'}
//             //else if(!validator.isLength(targetValue, {min: min, max:max})) { error[targetName] = `should be $(min)~$(max)`}
//             else if(!validator.isLength(targetValue, {min: min, max:max})) { error[targetName] = 'should be 8~10'}
//             else if(  this.state.password2 != '' && targetValue != this.state.password2){
//                 error[targetName] = 'should be same';
//             }

//         }
//         else if(targetName === 'password2'){
//             const min = 8, max = 10;
//             if(validator.isEmpty(targetValue))  { error[targetName] = 'should not empty'}
//             //else if(!validator.isLength(targetValue, {min: min, max:max})) { error[targetName] = `should be $(min)~$(max)`}
//             else if(!validator.isLength(targetValue, {min: min, max:max})) { error[targetName] = 'should be 8~10'}
//             else if( this.state.password1 != '' && targetValue != this.state.password1){
//                 error[targetName] = 'should be same';
//             }
//         }
//         return error;
//     };
//     getNewState = (targetName, targetValue, change, error, state, fieldNum) => {

//         const newState = {
//             ...state,
//             ...change
//         };

//         newState.touched[targetName] = true;

//         if (error[targetName]){
//             newState.errors[targetName] = newState.touched[targetName] && error[targetName]
//         } else {
//             delete newState.errors[targetName];
//             if(targetName === 'password1') { delete newState.errors['password2']}
//             else if(targetName === 'password2'){delete newState.errors['password1']}
//         }
//         newState.disabled = Object.keys(newState.errors).length > 0 || Object.keys(newState.touched).length < fieldNum;

//         return newState;
//     };

//     handleOnBlur = async (e)=>{
//         const targetName = e.target.name;
//         const targetValue = e.target.value;

//         let change = null;
//         if(targetName === 'firstname' || targetName === 'lastname') {
//            change = {
//                 fullname: {
//                     ...this.state.fullname,
//                     [targetName]: targetValue
//                 }
//             };
//         }else{
//             change = {
//                 [targetName]: targetValue
//             };
//         }
//         const error = this.validate(targetName, targetValue);
//         const newState = this.getNewState(targetName, targetValue, change, error, this.state, 2);
//         if(targetName === 'firstname' && !newState.errors['firstname']){
//             newState.loading = true;
//             const result = await this.isDuplicate(targetValue);
//             if (result) newState.errors[targetName] = newState.touched[targetName] && 'is duplicate.';
//             newState.loading = false;
//             this.setState(newState);

//         } else if(targetName === 'lastname' && !newState.errors['lastname']){
//             newState.loading = true;
//             const result = await this.isDuplicate2(targetValue);
//             if (result) newState.errors[targetName] = newState.touched[targetName] && 'is duplicate.';
//             newState.loading = false;
//             this.setState(newState);
//         }
//         this.setState(newState);
//     };
//     handleOnChange=(e)=>{
//         const targetName = e.target.name;
//         const targetValue = e.target.value;
//         let change = null;
//         if(targetName === 'firstname' || targetName === 'lastname') {
//             change = {
//                 fullname: {
//                     ...this.state.fullname,
//                     [targetName]: targetValue
//                 }
//             };
//         }else{
//             change = {
//                 [targetName]: targetValue
//             };
//         }
//         const error = this.validate(targetName, targetValue);
//         const newState = this.getNewState(targetName, targetValue, change, error, this.state, 2)
        
//         this.setState(newState);
//     };

//     //TODO : onSubmit에서 e를 이용해서 form전체의 값을 받기
//     nameRef=null;
//     handleOnSubmit=(e)=>{
//         e.preventDefault();
//         let data = new FormData(e.target);

//         let payload = {};
//         for(var pair of data.entries()) {
//             payload[pair[0]]=pair[1];
//         }
//         this.props.onSubmit(payload);
//     };

//     render() {
//         // const {fullname} = this.props;
//         const {fullname, password1, password2} = this.state;
//         return (
//             <form onSubmit={this.handleOnSubmit}>
//                 <div>
//                 <span>
//                     <input type="text"
//                         name='firstname'
//                         value={fullname.firstname}
//                         onChange={this.handleOnChange}
//                         onBlur={this.handleOnBlur}
//                         placeholder='first name'
//                         disabled={this.state.loading}
//                     />
//                     <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.firstname}</div>
//                 </span>
//                 <span>
//                     <input type="text"
//                         name='lastname'
//                         value={fullname.lastname}
//                         onChange={this.handleOnChange}
//                         onBlur={this.handleOnBlur}
//                         placeholder='last name'
//                     />
//                     <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.lastname}</div>
//                 </span>
//                 </div>
//                 <div>
//                     <input type="password"
//                            name='password1'
//                            value={password1}
//                            onChange={this.handleOnChange}
//                            onBlur={this.handleOnBlur}
//                            placeholder='password1'
//                     />
//                     <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.password1}</div>
//                     <input type="password"
//                            name='password2'
//                            value={password2}
//                            onChange={this.handleOnChange}
//                            onBlur={this.handleOnBlur}
//                            placeholder='password2'
//                     />
//                     <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.password2}</div>
//                 </div>
//                 <div>
//                 <button type="submit" disabled={this.state.disabled || this.state.loading}>submit</button>
//                 </div>
//             </form>
//         );
//     }
// }

// export default NamePHSForm;
// //############################################################
// import React, {Component} from 'react';
// import * as validator from 'validator';

// class NamePHSForm extends Component {
//     static defaultProps = {};

//     static propTypes = {};

//     state = {
//         fullname: {
//             firstname:'',
//             lastname:'',
//         },
//         password1:'',
//         password2:'',
//         touched:{},
//         errors: {},
//         disabled: true,
//         loading: false,
//     };
//     newState;
//     isDuplicate = (targetValue)=> {
//         return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 if(targetValue === 'aaa'){
//                     resolve(true);
//                 }else{
//                     resolve(false);
//                 }
//             }, 3000);
//         });
//     };
//     isDuplicate2 = (targetValue)=> {
//         return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 if(targetValue === 'bbb'){
//                     resolve(true);
//                 }else{
//                     resolve(false);
//                 }
//             }, 3000);
//         });
//     };

//     // validator library :
//     validate = (targetName, targetValue)=>{

//         // let newState;
//         if(targetName === 'firstname' || targetName === 'lastname') {
//             this.newState = {
//                ...this.state,
//                 fullname: {
//                     ...this.state.fullname,
//                     [targetName]: targetValue
//                 }
//             };
//         }else{
//             this.newState = {
//                 ...this.state,
//                 [targetName]: targetValue
//             };
//         }
        
//         this.newState.touched[targetName] = true;

//         const error = {targetName: ''};
//         if(targetName === 'firstname') {
//             if(validator.isEmpty(targetValue))  { error[targetName] = 'should not empty'}
//             else if(!validator.isLength(targetValue, {min: 3, max:5})) { error[targetName] = 'should be 3~5'}
//         }
//         else if(targetName === 'lastname'){
//             if(validator.isEmpty(targetValue))  { error[targetName] = 'should not empty'}
//             else if(!validator.isLength(targetValue, {min: 3, max:5})) { error[targetName] = 'should be 3~5'}
//         }
//         else if(targetName.indexOf('password')>-1){
//             if(validator.isEmpty(targetValue))  { error[targetName] = 'should not empty'}
//             else if(!validator.isLength(targetValue, {min: 8, max: 10})) { error[targetName] = 'should be 8~10'}
//             else if(targetName === 'password1' && this.newState.password2 !== '' && targetValue != this.newState.password2){ error[targetName] = 'should be same' } 
//             else if(targetName === 'password2' && this.newState.password1 !== '' && targetValue != this.newState.password1){ error[targetName] = 'should be same' } 
//         }
//         if(error[targetName]){
//             this.newState.errors[targetName] = error[targetName];
//         }else{
//             delete this.newState.errors[targetName];
//             if(targetName==='password1'){delete this.newState.errors['password2']}
//             else if(targetName==='password2'){delete this.newState.errors['password1']}
//         }
//         this.newState.disabled = Object.keys(this.newState.errors).length > 0 || Object.keys(this.newState.touched).length < 4;
//         // return newState;
//     };

//     handleOnBlur = async (e)=>{
//         const targetName = e.target.name;
//         const targetValue = e.target.value;

//         // const newState = this.validate(targetName, targetValue);
//         this.validate(targetName, targetValue);

//         if(targetName === 'firstname' && !this.newState.errors['firstname']){
//             this.newState.loading = true;
//             this.setState(this.newState);
            
//             const result = await this.isDuplicate(targetValue);
//             console.log(result);
//             if (result) {
//                 this.newState.errors[targetName] = 'is duplicate.';
//                 this.newState.disabled = Object.keys(this.newState.errors).length > 0 || Object.keys(this.newState.touched).length < 4;
//             }
//             this.newState.loading = false;
//             this.setState(this.newState);

//         } else if(targetName === 'lastname' && !this.newState.errors['lastname']){
//             this.newState.loading = true;
//             this.setState(this.newState);

//             const result = await this.isDuplicate2(targetValue);
//             if (result) {
//                 this.newState.errors[targetName] = 'is duplicate.';
//                 this.newState.disabled = Object.keys(this.newState.errors).length > 0 || Object.keys(this.newState.touched).length < 4;
//             }
//             this.newState.loading = false;
//             this.setState(this.newState);
//         }else{
//             this.setState(this.newState);
//         }

//     };
//     handleOnChange=(e)=>{
//         const targetName = e.target.name;
//         const targetValue = e.target.value;

//         this.validate(targetName, targetValue)
        
//         this.setState(this.newState);
//     };

//     //TODO : onSubmit에서 e를 이용해서 form전체의 값을 받기
//     nameRef=null;
//     handleOnSubmit=(e)=>{
//         e.preventDefault();
//         let data = new FormData(e.target);

//         let payload = {};
//         for(var pair of data.entries()) {
//             payload[pair[0]]=pair[1];
//         }
//         this.props.onSubmit(payload);
//     };

//     render() {
//         // const {fullname} = this.props;
//         const {fullname, password1, password2} = this.state;
//         return (
//             <form onSubmit={this.handleOnSubmit}>
//                 <div>
//                 <span>
//                     <input type="text"
//                         name='firstname'
//                         value={fullname.firstname}
//                         onChange={this.handleOnChange}
//                         onBlur={this.handleOnBlur}
//                         placeholder='first name'
//                         disabled={this.state.loading}
//                     />
//                     <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.firstname}</div>
//                 </span>
//                 <span>
//                     <input type="text"
//                         name='lastname'
//                         value={fullname.lastname}
//                         onChange={this.handleOnChange}
//                         onBlur={this.handleOnBlur}
//                         placeholder='last name'
//                     />
//                     <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.lastname}</div>
//                 </span>
//                 </div>
//                 <div>
//                     <input type="password"
//                            name='password1'
//                            value={password1}
//                            onChange={this.handleOnChange}
//                            onBlur={this.handleOnBlur}
//                            placeholder='password1'
//                     />
//                     <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.password1}</div>
//                     <input type="password"
//                            name='password2'
//                            value={password2}
//                            onChange={this.handleOnChange}
//                            onBlur={this.handleOnBlur}
//                            placeholder='password2'
//                     />
//                     <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.password2}</div>
//                 </div>
//                 <div>
//                 <button type="submit" disabled={this.state.disabled || this.state.loading}>submit</button>
//                 </div>
//             </form>
//         );
//     }
// }

// export default NamePHSForm;
// //############################################################
// import React, {Component} from 'react';
// import * as validator from 'validator';

// class NamePHSForm extends Component {
//     static defaultProps = {};

//     static propTypes = {};

//     state = {
//         fullname: {
//             firstname:'',
//             lastname:'',
//         },
//         password1:'',
//         password2:'',
//         touched:{},
//         errors: {},
//         disabled: true,
//         loading: false,
//     };
//     newState;
//     isDuplicate = (targetValue)=> {
//         return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 if(targetValue === 'aaa'){
//                     resolve(true);
//                 }else{
//                     resolve(false);
//                 }
//             }, 3000);
//         });
//     };
//     isDuplicate2 = (targetValue)=> {
//         return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 if(targetValue === 'bbb'){
//                     resolve(true);
//                 }else{
//                     resolve(false);
//                 }
//             }, 3000);
//         });
//     };

//     // validator library :
//     validate = (targetName, targetValue)=>{

//         // let newState;
//         // if(targetName === 'firstname' || targetName === 'lastname') {
//         //     this.newState = {
//         //        ...this.state,
//         //         fullname: {
//         //             ...this.state.fullname,
//         //             [targetName]: targetValue
//         //         }
//         //     };
//         // }else{
//         //     this.newState = {
//         //         ...this.state,
//         //         [targetName]: targetValue
//         //     };
//         // }
//         if(targetName === 'firstname' || targetName === 'lastname') {
//             this.setState({fullname:{...this.state.fullname, [targetName]: targetValue}});
//         }else{
//             this.setState({[targetName]: targetValue});
//         }
//         // this.newState.touched[targetName] = true;
//         this.setState({touched:{...this.state.touched, [targetName]: true}});

//         const error = {targetName: ''};
//         if(targetName === 'firstname') {
//             if(validator.isEmpty(targetValue))  { error[targetName] = 'should not empty'}
//             else if(!validator.isLength(targetValue, {min: 3, max:5})) { error[targetName] = 'should be 3~5'}
//         }
//         else if(targetName === 'lastname'){
//             if(validator.isEmpty(targetValue))  { error[targetName] = 'should not empty'}
//             else if(!validator.isLength(targetValue, {min: 3, max:5})) { error[targetName] = 'should be 3~5'}
//         }
//         else if(targetName.indexOf('password')>-1){
//             if(validator.isEmpty(targetValue))  { error[targetName] = 'should not empty'}
//             else if(!validator.isLength(targetValue, {min: 8, max: 10})) { error[targetName] = 'should be 8~10'}
//             else if(targetName === 'password1' && this.state.password2 !== '' && targetValue != this.state.password2){ error[targetName] = 'should be same' } 
//             else if(targetName === 'password2' && this.state.password1 !== '' && targetValue != this.state.password1){ error[targetName] = 'should be same' } 
//         }
//         if(error[targetName]){
//             // this.newState.errors[targetName] = error[targetName];
//             this.setState({errors:{...this.state.errors, [targetName]: error[targetName]}});
//         console.log(this.state);

//         }else{
//             // delete this.newState.errors[targetName];
//             let newErrors = {...this.state.errors};
//             delete newErrors[targetName];
//             this.setState({errors: newErrors});
//             // if(targetName==='password1'){delete this.newState.errors['password2']}
//             // else if(targetName==='password2'){delete this.newState.errors['password1']}
//             if(targetName==='password1'){this.setState({errors:{['password2']: null}});}
//             else if(targetName==='password2'){this.setState({errors:{['password1']: null}});}

//         }
//         // this.newState.disabled = Object.keys(this.newState.errors).length > 0 || Object.keys(this.newState.touched).length < 4;
//         const disabled = Object.keys(this.state.errors).length > 0 || Object.keys(this.state.touched).length < 4;
//         this.setState({disabled});
//         // return newState;
//     };

//     handleOnBlur = async (e)=>{
//         const targetName = e.target.name;
//         const targetValue = e.target.value;

//         // const newState = this.validate(targetName, targetValue);
//         this.validate(targetName, targetValue);
//         console.log(this.state.errors['firstname']);
//         if(targetName === 'firstname' && !this.state.errors['firstname']){
//             this.setState({loading: true});
            
//             const result = await this.isDuplicate(targetValue);
//             console.log(result);
//             if (result) {
//                 this.setState({errors:{[targetName]: 'is duplicate.'}});
//                 const disabled = Object.keys(this.state.errors).length > 0 || Object.keys(this.state.touched).length < 4;
//                 this.setState({disabled});
//             }
//             this.setState({loading: false});

//         } else if(targetName === 'lastname' && !this.state.errors['lastname']){
//             this.setState({loading: true});

//             const result = await this.isDuplicate2(targetValue);
//             if (result) {
//                 this.setState({errors:{[targetName]: 'is duplicate.'}});
//                 const disabled = Object.keys(this.state.errors).length > 0 || Object.keys(this.state.touched).length < 4;
//                 this.setState({disabled});
//             }
//             this.setState({loading: false});
//         }


//     };
//     handleOnChange=(e)=>{
//         const targetName = e.target.name;
//         const targetValue = e.target.value;

//         this.validate(targetName, targetValue)
        
//         // this.setState(this.newState);
//     };

//     //TODO : onSubmit에서 e를 이용해서 form전체의 값을 받기
//     nameRef=null;
//     handleOnSubmit=(e)=>{
//         e.preventDefault();
//         let data = new FormData(e.target);

//         let payload = {};
//         for(var pair of data.entries()) {
//             payload[pair[0]]=pair[1];
//         }
//         this.props.onSubmit(payload);
//     };

//     render() {
//         // const {fullname} = this.props;
//         const {fullname, password1, password2} = this.state;
//         return (
//             <form onSubmit={this.handleOnSubmit}>
//                 <div>
//                 <span>
//                     <input type="text"
//                         name='firstname'
//                         defaultValue={fullname.firstname}
//                         onChange={this.handleOnChange}
//                         onBlur={this.handleOnBlur}
//                         placeholder='first name'
//                         disabled={this.state.loading}
//                     />
//                     <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.firstname}</div>
//                 </span>
//                 <span>
//                     <input type="text"
//                         name='lastname'
//                         defaultValue={fullname.lastname}
//                         onChange={this.handleOnChange}
//                         onBlur={this.handleOnBlur}
//                         placeholder='last name'
//                     />
//                     <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.lastname}</div>
//                 </span>
//                 </div>
//                 <div>
//                     <input type="password"
//                            name='password1'
//                            defaultValue={password1}
//                            onChange={this.handleOnChange}
//                            onBlur={this.handleOnBlur}
//                            placeholder='password1'
//                     />
//                     <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.password1}</div>
//                     <input type="password"
//                            name='password2'
//                            defaultValue={password2}
//                            onChange={this.handleOnChange}
//                            onBlur={this.handleOnBlur}
//                            placeholder='password2'
//                     />
//                     <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.password2}</div>
//                 </div>
//                 <div>
//                 <button type="submit" disabled={this.state.disabled || this.state.loading}>submit</button>
//                 </div>
//             </form>
//         );
//     }
// }

// export default NamePHSForm;
// // //############################################################
// import React, {Component} from 'react';
// import * as validator from 'validator';

// class NamePHSForm extends Component {
//     static defaultProps = {};

//     static propTypes = {};

//     state = {
//         fullname: {
//             firstname:'',
//             lastname:'',
//         },
//         password1:'',
//         password2:'',
//         touched:{},
//         errors: {},
//         disabled: true,
//         loading: false,
//     };
//     isDuplicate = (targetValue)=> {
//         return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 if(targetValue === 'aaa'){
//                     resolve(true);
//                 }else{
//                     resolve(false);
//                 }
//             }, 3000);
//         });
//     };
//     isDuplicate2 = (targetValue)=> {
//         return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 if(targetValue === 'bbb'){
//                     resolve(true);
//                 }else{
//                     resolve(false);
//                 }
//             }, 3000);
//         });
//     };

//     // validator library :
//     validate = (targetName, targetValue, state, totalInputNumber)=>{

//         // create new state from previous state
//         let newState;
//         if(targetName === 'firstname' || targetName === 'lastname') {
//             newState = {
//                ...state,
//                 fullname: {
//                     ...state.fullname,
//                     [targetName]: targetValue
//                 }
//             };
//         }else{
//             newState = {
//                 ...state,
//                 [targetName]: targetValue
//             };
//         }

//         // set touched
//         newState.touched[targetName] = true;

//         //start validation
//         const error = {targetName: ''};
//         if(targetName === 'firstname') {
//             if(validator.isEmpty(targetValue))  { error[targetName] = 'should not empty'}
//             else if(!validator.isLength(targetValue, {min: 3, max:5})) { error[targetName] = 'should be 3~5'}
//         }
//         else if(targetName === 'lastname'){
//             if(validator.isEmpty(targetValue))  { error[targetName] = 'should not empty'}
//             else if(!validator.isLength(targetValue, {min: 3, max:5})) { error[targetName] = 'should be 3~5'}
//         }
//         else if(targetName.indexOf('password')>-1){
//             if(validator.isEmpty(targetValue))  { error[targetName] = 'should not empty'}
//             else if(!validator.isLength(targetValue, {min: 8, max: 10})) { error[targetName] = 'should be 8~10'}
//             else if(targetName === 'password1' && newState.password2 !== '' && targetValue != newState.password2){ error[targetName] = 'should be same' } 
//             else if(targetName === 'password2' && newState.password1 !== '' && targetValue != newState.password1){ error[targetName] = 'should be same' } 
//         }

//         // set error message
//         if(error[targetName]){
//             newState.errors[targetName] = error[targetName];
//         }else{
//             delete newState.errors[targetName];
//             if(targetName==='password1'){delete newState.errors['password2']}
//             else if(targetName==='password2'){delete newState.errors['password1']}
//         }

//         // set disabled
//         newState.disabled = Object.keys(newState.errors).length > 0 || Object.keys(newState.touched).length < totalInputNumber;

//         // finally return bew state
//         return newState;
//     };

//     handleOnBlur = async (e)=>{
//         const targetName = e.target.name;
//         const targetValue = e.target.value;
//         const totalInputNumber = 4;
//         const newState = this.validate(targetName, targetValue, this.state, totalInputNumber);

//         if(targetName === 'firstname' && !newState.errors['firstname']){
//             newState.loading = true;
//             newState.disabled = true;
//             this.setState(newState);
            
//             const result = await this.isDuplicate(targetValue);

//             if (result) {
//                 newState.errors[targetName] = 'is duplicate.';
//             } else {
//                 newState.disabled = false;
//             }
//             newState.loading = false;
//             this.setState(newState);

//         } else if(targetName === 'lastname' && !newState.errors['lastname']){
//             newState.loading = true;
//             newState.disabled = true;
//             this.setState(newState);

//             const result = await this.isDuplicate2(targetValue);
//             if (result) {
//                 newState.errors[targetName] = 'is duplicate.';
//             } else {
//                 newState.disabled = false;
//             }
//             newState.loading = false;
//             this.setState(newState);
            
//         }else{
//             this.setState(newState);
//         }
//     };
//     handleOnChange=(e)=>{
//         const targetName = e.target.name;
//         const targetValue = e.target.value;
//         const totalInputNumber = 4;
//         const newState = this.validate(targetName, targetValue, this.state, totalInputNumber);

//         this.setState(newState);
//     };

//     //TODO : onSubmit에서 e를 이용해서 form전체의 값을 받기
//     nameRef=null;
//     handleOnSubmit=(e)=>{
//         e.preventDefault();
//         let data = new FormData(e.target);

//         let payload = {};
//         for(var pair of data.entries()) {
//             payload[pair[0]]=pair[1];
//         }
//         this.props.onSubmit(payload);
//     };

//     render() {
//         // const {fullname} = this.props;
//         const {fullname, password1, password2} = this.state;
//         return (
//             <form onSubmit={this.handleOnSubmit}>
//                 <div>
//                 <span>
//                     <input type="text"
//                         name='firstname'
//                         defaultValue={fullname.firstname}
//                         onChange={this.handleOnChange}
//                         onBlur={this.handleOnBlur}
//                         placeholder='first name'
//                     />
//                     <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.firstname}</div>
//                 </span>
//                 <span>
//                     <input type="text"
//                         name='lastname'
//                         defaultValue={fullname.lastname}
//                         onChange={this.handleOnChange}
//                         onBlur={this.handleOnBlur}
//                         placeholder='last name'
//                     />
//                     <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.lastname}</div>
//                 </span>
//                 </div>
//                 <div>
//                     <input type="password"
//                            name='password1'
//                            defaultValue={password1}
//                            onChange={this.handleOnChange}
//                            onBlur={this.handleOnBlur}
//                            placeholder='password1'
//                     />
//                     <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.password1}</div>
//                     <input type="password"
//                            name='password2'
//                            defaultValue={password2}
//                            onChange={this.handleOnChange}
//                            onBlur={this.handleOnBlur}
//                            placeholder='password2'
//                     />
//                     <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.password2}</div>
//                 </div>
//                 <div>
//                 <button type="submit" disabled={this.state.disabled || this.state.loading}>submit</button>
//                 </div>
//             </form>
//         );
//     }
// }

// export default NamePHSForm;

// //############################################################
// import React, {Component} from 'react';
// import * as validator from 'validator';

// class NamePHSForm extends Component {
//     static defaultProps = {};

//     static propTypes = {};

//     state = {
//         fullname: {
//             firstname:'',
//             lastname:'',
//         },
//         password1:'',
//         password2:'',
//         touched:{},
//         errors: {},
//         disabled: true,
//         loading: false,
//     };
//     isDuplicate = (targetValue)=> {
//         return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 if(targetValue === 'aaa'){
//                     resolve(true);
//                 }else{
//                     resolve(false);
//                 }
//             }, 3000);
//         });
//     };
//     isDuplicate2 = (targetValue)=> {
//         return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 if(targetValue === 'bbb'){
//                     resolve(true);
//                 }else{
//                     resolve(false);
//                 }
//             }, 3000);
//         });
//     };

//     // validator library :
//     validate = (targetName, targetValue, state, totalInputNumber)=>{

//         // create new state from previous state
//         let newState;
//         if(targetName === 'firstname' || targetName === 'lastname') {
//             newState = {
//                ...state,
//                 fullname: {
//                     ...state.fullname,
//                     [targetName]: targetValue
//                 }
//             };
//         }else{
//             newState = {
//                 ...state,
//                 [targetName]: targetValue
//             };
//         }

//         // set touched
//         newState.touched[targetName] = true;

//         //start validation
//         const error = {targetName: ''};
//         if(targetName === 'firstname') {
//             if(validator.isEmpty(targetValue))  { error[targetName] = 'should not empty'}
//             else if(!validator.isLength(targetValue, {min: 3, max:5})) { error[targetName] = 'should be 3~5'}
//         }
//         else if(targetName === 'lastname'){
//             if(validator.isEmpty(targetValue))  { error[targetName] = 'should not empty'}
//             else if(!validator.isLength(targetValue, {min: 3, max:5})) { error[targetName] = 'should be 3~5'}
//         }
//         else if(targetName.indexOf('password')>-1){
//             if(validator.isEmpty(targetValue))  { error[targetName] = 'should not empty'}
//             else if(!validator.isLength(targetValue, {min: 8, max: 10})) { error[targetName] = 'should be 8~10'}
//             else if(targetName === 'password1' && newState.password2 !== '' && targetValue != newState.password2){ error[targetName] = 'should be same' } 
//             else if(targetName === 'password2' && newState.password1 !== '' && targetValue != newState.password1){ error[targetName] = 'should be same' } 
//         }

//         // set error message
//         if(error[targetName]){
//             newState.errors[targetName] = error[targetName];
//         }else{
//             delete newState.errors[targetName];
//             if(targetName==='password1'){delete newState.errors['password2']}
//             else if(targetName==='password2'){delete newState.errors['password1']}
//         }

//         // set disabled
//         newState.disabled = Object.keys(newState.errors).length > 0 || Object.keys(newState.touched).length < totalInputNumber;

//         // finally return bew state
//         return newState;
//     };

//     handleOnBlur = async (e)=>{
//         const targetName = e.target.name;
//         const targetValue = e.target.value;
//         const totalInputNumber = 4;
//         const newState = this.validate(targetName, targetValue, this.state, totalInputNumber);

//         if(targetName === 'firstname' && !newState.errors['firstname']){
//             newState.loading = true;
//             newState.disabled = true;
//             this.setState(newState);
            
//             const result = await this.isDuplicate(targetValue);

//             if (result) {
//                 newState.errors[targetName] = 'is duplicate.';
//             } else {
//                 newState.disabled = false;
//             }
//             newState.loading = false;
//             this.setState(newState);

//         } else if(targetName === 'lastname' && !newState.errors['lastname']){
//             newState.loading = true;
//             newState.disabled = true;
//             this.setState(newState);

//             const result = await this.isDuplicate2(targetValue);
//             if (result) {
//                 newState.errors[targetName] = 'is duplicate.';
//             } else {
//                 newState.disabled = false;
//             }
//             newState.loading = false;
//             this.setState(newState);
            
//         }else{
//             this.setState(newState);
//         }
//     };
//     handleOnChange=(e)=>{
//         const targetName = e.target.name;
//         const targetValue = e.target.value;
//         const totalInputNumber = 4;
//         const newState = this.validate(targetName, targetValue, this.state, totalInputNumber);

//         this.setState(newState);
//     };

//     //TODO : onSubmit에서 e를 이용해서 form전체의 값을 받기
//     nameRef=null;
//     handleOnSubmit=(e)=>{
//         e.preventDefault();
//         let data = new FormData(e.target);

//         let payload = {};
//         for(var pair of data.entries()) {
//             payload[pair[0]]=pair[1];
//         }
//         this.props.onSubmit(payload);
//     };

//     render() {
//         // const {fullname} = this.props;
//         const {fullname, password1, password2} = this.state;
//         return (
//             <form onSubmit={this.handleOnSubmit}>
//                 <div>
//                 <span>
//                     <input type="text"
//                         name='firstname'
//                         defaultValue={fullname.firstname}
//                         onChange={this.handleOnChange}
//                         onBlur={this.handleOnBlur}
//                         placeholder='first name'
//                     />
//                     <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.firstname}</div>
//                 </span>
//                 <span>
//                     <input type="text"
//                         name='lastname'
//                         defaultValue={fullname.lastname}
//                         onChange={this.handleOnChange}
//                         onBlur={this.handleOnBlur}
//                         placeholder='last name'
//                     />
//                     <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.lastname}</div>
//                 </span>
//                 </div>
//                 <div>
//                     <input type="password"
//                            name='password1'
//                            defaultValue={password1}
//                            onChange={this.handleOnChange}
//                            onBlur={this.handleOnBlur}
//                            placeholder='password1'
//                     />
//                     <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.password1}</div>
//                     <input type="password"
//                            name='password2'
//                            defaultValue={password2}
//                            onChange={this.handleOnChange}
//                            onBlur={this.handleOnBlur}
//                            placeholder='password2'
//                     />
//                     <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.password2}</div>
//                 </div>
//                 <div>
//                 <button type="submit" disabled={this.state.disabled || this.state.loading}>submit</button>
//                 </div>
//             </form>
//         );
//     }
// }

// export default NamePHSForm;

// // //############################################################
// import React, {Component} from 'react';
// import * as validator from 'validator';
// import * as yup from 'yup';

// class NamePHSForm extends Component {
//     static defaultProps = {};

//     static propTypes = {};

//     state = {
//         fullname: {
//             firstname:'',
//             lastname:'',
//         },
//         password1:'',
//         password2:'',
//         touched:{},
//         errors: {},
//         disabled: true,
//         loading: false,
//     };

//     schema = yup.object().shape({
//         fullname: yup.object().shape({
//             firstname: yup.string().required('first is required').min(3).max(5).test('isDuplicate', 'aaa is duplicate', (value)=>{
//                 return new Promise((resolve, reject)=>{
//                     setTimeout(()=>{
//                         resolve(value!=='aaa');
//                     }, 3000)
//                 })
//             }),
//             lastname: yup.string().required('first is required').min(3).max(5),
//         }),
//         password1: yup.string().required('password is required').min(5).max(8),
//         password2: yup.string().oneOf([yup.ref('password1')], 'should be same as password1' )
//     });

//     newState;
//     doValidate = (e)=>{
//         const targetName = e.target.name;
//         const targetValue = e.target.value;

//         //create new state
//         let path;
//         if(targetName==='firstname' || targetName==='lastname'){
//             this.newState = {
//                 ...this.state,
//                 fullname: {
//                     ...this.state.fullname,
//                     [targetName]: targetValue
//                 }            
//             }
//             path = 'fullname.'+targetName;
//         }else{
//             this.newState = {
//                 ...this.state,
//                 [targetName]: targetValue
//             }
//             path = targetName;
//         }

//         this.newState.touched[targetName] = true;
//         this.newState.loading = true;
//         this.newState.disabled = true;
//         this.setState(this.newState);

//         this.schema.validateAt(path, this.newState).then(value=>{
//             delete this.newState.errors[targetName];

//             if(targetName=== 'password1'){
//                 if(targetValue === this.newState.password2){
//                     delete this.newState.errors.password2;
//                 }else{
//                     this.newState.errors[targetName] = 'should match';
//                 }
                
//             }else if(targetName=== 'password2'){
//                 if(targetValue === this.newState.password1){
//                     delete this.newState.errors.password1;
//                 }else{
//                     this.newState.errors[targetName] = 'should match';
//                 }
//             }
//             this.newState.loading = false;
//             this.newState.disabled = Object.keys(this.newState.errors).length > 0 || Object.keys(this.newState.touched).length < 4;
//             this.setState(this.newState)
//         }).catch(err=>{
//             this.newState.errors[err.path] = err.errors;
//             this.newState.loading = false;
//             this.newState.disabled = true;
//             this.setState(this.newState)
//         });
//     }
//     handleOnBlur = (e)=>{
//         // this.doValidate(e);
//     }
//     handleOnChange=(e)=>{
//         this.doValidate(e);
//     };

//     //TODO : onSubmit에서 e를 이용해서 form전체의 값을 받기
//     nameRef=null;
//     handleOnSubmit=(e)=>{
//         e.preventDefault();
//         let data = new FormData(e.target);

//         let payload = {};
//         for(var pair of data.entries()) {
//             payload[pair[0]]=pair[1];
//         }
//         this.props.onSubmit(payload);
//     };

//     render() {
//         // const {fullname} = this.props;
//         const {fullname, password1, password2} = this.state;
//         return (
//             <form onSubmit={this.handleOnSubmit}>
//                 <div>
//                 <span>
//                     <input type="text"
//                         name='firstname'
//                         defaultValue={fullname.firstname}
//                         onChange={this.handleOnChange}
//                         onBlur={this.handleOnBlur}
//                         placeholder='first name'
//                     />
//                     <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.firstname}</div>
//                 </span>
//                 <span>
//                     <input type="text"
//                         name='lastname'
//                         defaultValue={fullname.lastname}
//                         onChange={this.handleOnChange}
//                         onBlur={this.handleOnBlur}
//                         placeholder='last name'
//                     />
//                     <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.lastname}</div>
//                 </span>
//                 </div>
//                 <div>
//                     <input type="password"
//                            name='password1'
//                            defaultValue={password1}
//                            onChange={this.handleOnChange}
//                            onBlur={this.handleOnBlur}
//                            placeholder='password1'
//                     />
//                     <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.password1}</div>
//                     <input type="password"
//                            name='password2'
//                            defaultValue={password2}
//                            onChange={this.handleOnChange}
//                            onBlur={this.handleOnBlur}
//                            placeholder='password2'
//                     />
//                     <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.password2}</div>
//                 </div>
//                 <div>
//                 <button type="submit" disabled={this.state.disabled || this.state.loading}>submit</button>
//                 </div>
//             </form>
//         );
//     }
// }

// export default NamePHSForm;

// //############################################################
// import React, {Component} from 'react';
// import * as validator from 'validator';
// import * as yup from 'yup';

// class NamePHSForm extends Component {
//     static defaultProps = {};

//     static propTypes = {};

//     state = {
//         fullname: {
//             firstname:'',
//             lastname:'',
//         },
//         password1:'',
//         password2:'',
//         touched:{
//             password1: false,
//             password2: false
//         },
//         errors: {},
//         disabled: true,
//         loading: false,
//     };

//     schema = yup.object().shape({
//         fullname: yup.object().shape({
//             firstname: yup.string().required('first is required').min(3).max(5).test('isDuplicate', 'aaa is duplicate', (value)=>{
//                 return new Promise((resolve, reject)=>{
//                     setTimeout(()=>{
//                         resolve(value!=='aaa');
//                     }, 3000)
//                 })
//             }),
//             lastname: yup.string().required('first is required').min(3).max(5),
//         }),
//         // password1: yup.string().required('password is required').min(5).max(8),
//         // password2: yup.string().oneOf([yup.ref('password1')], 'should be same as password1' )

//         password1: yup.string().required('password is required').min(5).max(8).test('isSame', 'should same as password2!',(value)=>{
//             return new Promise(((resolve, reject)=>{
//                 resolve( yup.ref('touched.password2') !== true || value===yup.ref('password2'))
//             }));
//         }),
//         password2: yup.string().required('password is required').min(5).max(8).test('isSame', 'should same as password1!',(value)=>{
//             return new Promise(((resolve, reject)=>{
//                 resolve( yup.ref('touched.password1') !==true || value===yup.ref('password1'))
//             }));
//         }),
//         touched:yup.object().shape({
//             password1: yup.boolean(),
//             password2: yup.boolean()
//         }),
//     });

//     newState;
//     doValidate = (e)=>{
//         const targetName = e.target.name;
//         const targetValue = e.target.value;

//         //create new state
//         let path;
//         if(targetName==='firstname' || targetName==='lastname'){
//             this.newState = {
//                 ...this.state,
//                 fullname: {
//                     ...this.state.fullname,
//                     [targetName]: targetValue
//                 }            
//             }
//             path = 'fullname.'+targetName;
//         }else{
//             this.newState = {
//                 ...this.state,
//                 [targetName]: targetValue
//             }
//             path = targetName;
//         }

//         this.newState.touched[targetName] = true;
//         this.newState.loading = true;
//         this.newState.disabled = true;
//         this.setState(this.newState);

//         this.schema.validateAt(path, this.newState).then(value=>{
//             delete this.newState.errors[targetName];

//             // if(targetName=== 'password1'){
//             //     if(targetValue === this.newState.password2){
//             //         delete this.newState.errors.password2;
//             //     }else{
//             //         this.newState.errors[targetName] = 'should match';
//             //     }
                
//             // }else if(targetName=== 'password2'){
//             //     if(targetValue === this.newState.password1){
//             //         delete this.newState.errors.password1;
//             //     }else{
//             //         this.newState.errors[targetName] = 'should match';
//             //     }
//             // }

//             if(targetName=== 'password1'){
//                 if(targetValue === this.newState.password2){
//                     delete this.newState.errors.password2;
//                 }else{
//                     // this.newState.errors[targetName] = 'should match';
//                 }
                
//             }else if(targetName=== 'password2'){
//                 if(targetValue === this.newState.password1){
//                     delete this.newState.errors.password1;
//                 }else{
//                     // this.newState.errors[targetName] = 'should match';
//                 }
//             }           
//             this.newState.loading = false;
//             this.newState.disabled = Object.keys(this.newState.errors).length > 0 || Object.keys(this.newState.touched).length < 4;
//             this.setState(this.newState)
//         }).catch(err=>{
//             this.newState.errors[err.path] = err.errors;
//             this.newState.loading = false;
//             this.newState.disabled = true;
//             this.setState(this.newState)
//         });
//     }
//     handleOnBlur = (e)=>{
//         this.doValidate(e);
//     }
//     handleOnChange=(e)=>{
//         this.doValidate(e);
//     };

//     //TODO : onSubmit에서 e를 이용해서 form전체의 값을 받기
//     nameRef=null;
//     handleOnSubmit=(e)=>{
//         e.preventDefault();
//         let data = new FormData(e.target);

//         let payload = {};
//         for(var pair of data.entries()) {
//             payload[pair[0]]=pair[1];
//         }
//         this.props.onSubmit(payload);
//     };

//     render() {
//         // const {fullname} = this.props;
//         const {fullname, password1, password2} = this.state;
//         return (
//             <form onSubmit={this.handleOnSubmit}>
//                 <div>
//                 <span>
//                     <input type="text"
//                         name='firstname'
//                         defaultValue={fullname.firstname}
//                         onChange={this.handleOnChange}
//                         onBlur={this.handleOnBlur}
//                         placeholder='first name'
//                     />
//                     <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.firstname}</div>
//                 </span>
//                 <span>
//                     <input type="text"
//                         name='lastname'
//                         defaultValue={fullname.lastname}
//                         onChange={this.handleOnChange}
//                         onBlur={this.handleOnBlur}
//                         placeholder='last name'
//                     />
//                     <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.lastname}</div>
//                 </span>
//                 </div>
//                 <div>
//                     <input type="password"
//                            name='password1'
//                            defaultValue={password1}
//                            onChange={this.handleOnChange}
//                            onBlur={this.handleOnBlur}
//                            placeholder='password1'
//                     />
//                     <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.password1}</div>
//                     <input type="password"
//                            name='password2'
//                            defaultValue={password2}
//                            onChange={this.handleOnChange}
//                            onBlur={this.handleOnBlur}
//                            placeholder='password2'
//                     />
//                     <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.password2}</div>
//                 </div>
//                 <div>
//                 <button type="submit" disabled={this.state.disabled || this.state.loading}>submit</button>
//                 </div>
//             </form>
//         );
//     }
// }

// export default NamePHSForm;
// // //############################################################
// import React, {Component} from 'react';
// import * as validator from 'validator';
// import * as yup from 'yup';

// class NamePHSForm extends Component {
//     static defaultProps = {};

//     static propTypes = {};

//     state = {
//         firstname:'',
//         lastname:'',
//         password1:'',
//         password2:'',
//         touched:{},
//         errors: {},
//         disabled: true,
//         loading: false,
//     };

//     schema = yup.object().shape({
//         firstname: yup.string().required('first is required').min(3).max(5).test('isDuplicate', 'aaa is duplicate', (value)=>{
//             return new Promise((resolve, reject)=>{
//                 setTimeout(()=>{
//                     resolve(value!=='aaa');
//                 }, 3000)
//             })
//         }),
//         lastname: yup.string().required('first is required').min(3).max(5),
//         password1: yup.string().required('password is required').min(5).max(8),
//         password2: yup.string().oneOf([yup.ref('password1')], 'should be same as password1' )
//     });

//     newState;
//     doValidate = (e)=>{
//         const targetName = e.target.name;
//         const targetValue = e.target.value;

//         //create new state
//         this.newState = {
//             ...this.state,
//             [targetName]: targetValue
//         }
//         this.newState.touched[targetName] = true;
//         this.newState.loading = true;
//         this.newState.disabled = true;
//         this.setState(this.newState);
        
//         const path = targetName;

//         this.schema.validateAt(path, this.newState).then(value=>{
//             delete this.newState.errors[targetName];

//             if(targetName=== 'password1'){
//                 if(targetValue === this.newState.password2){
//                     delete this.newState.errors.password2;
//                 }else{
//                     this.newState.errors[targetName] = 'should match';
//                 }
                
//             }else if(targetName=== 'password2'){
//                 if(targetValue === this.newState.password1){
//                     delete this.newState.errors.password1;
//                 }else{
//                     this.newState.errors[targetName] = 'should match';
//                 }
//             }
//             this.newState.loading = false;
//             this.newState.disabled = Object.keys(this.newState.errors).length > 0 || Object.keys(this.newState.touched).length < 4;
//             this.setState(this.newState)
//         }).catch(err=>{
//             this.newState.errors[err.path] = err.errors;
//             this.newState.loading = false;
//             this.newState.disabled = true;
//             this.setState(this.newState)
//         });
//     }
//     handleOnBlur = (e)=>{
//         this.doValidate(e);
//     }
//     handleOnChange=(e)=>{
//         this.doValidate(e);
//     };

//     //TODO : onSubmit에서 e를 이용해서 form전체의 값을 받기
//     nameRef=null;
//     handleOnSubmit=(e)=>{
//         e.preventDefault();
//         let data = new FormData(e.target);

//         let payload = {};
//         for(var pair of data.entries()) {
//             payload[pair[0]]=pair[1];
//         }
//         this.props.onSubmit(payload);
//     };

//     render() {
//         // const {fullname} = this.props;
//         // const {fullname, password1, password2} = this.state;
//         const {firstname, lastname, password1, password2} = this.state;
//         return (
//             <form onSubmit={this.handleOnSubmit}>
//                 <div>
//                 <span>
//                     <input type="text"
//                         name='firstname'
//                         defaultValue={firstname}
//                         onChange={this.handleOnChange}
//                         onBlur={this.handleOnBlur}
//                         placeholder='first name'
//                     />
//                     <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.firstname}</div>
//                 </span>
//                 <span>
//                     <input type="text"
//                         name='lastname'
//                         defaultValue={lastname}
//                         onChange={this.handleOnChange}
//                         onBlur={this.handleOnBlur}
//                         placeholder='last name'
//                     />
//                     <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.lastname}</div>
//                 </span>
//                 </div>
//                 <div>
//                     <input type="password"
//                            name='password1'
//                            defaultValue={password1}
//                            onChange={this.handleOnChange}
//                            onBlur={this.handleOnBlur}
//                            placeholder='password1'
//                     />
//                     <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.password1}</div>
//                     <input type="password"
//                            name='password2'
//                            defaultValue={password2}
//                            onChange={this.handleOnChange}
//                            onBlur={this.handleOnBlur}
//                            placeholder='password2'
//                     />
//                     <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.password2}</div>
//                 </div>
//                 <div>
//                 <button type="submit" disabled={this.state.disabled || this.state.loading}>submit</button>
//                 </div>
//             </form>
//         );
//     }
// }

// export default NamePHSForm;
// //############################################################
import React, {Component} from 'react';
import * as validator from 'validator';
import * as yup from 'yup';

yup.addMethod(yup.mixed, 'equalTo', function(ref, message) {
    const msg = message || '${path} should match';
    return this.test('equalTo', msg, function (value) {
      let other = this.resolve(ref);
      return !other || !value || value === other;
    })
})

class NamePHSForm extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {
        firstname:'',
        lastname:'',
        password1:'',
        password2:'',
        touched:{},
        errors: {},
        disabled: true,
        loading: false,
    };

    schema = yup.object().shape({
        firstname: yup.string().required('first is required').min(3).max(5).test('isDuplicate', 'aaa is duplicate', (value)=>{
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    resolve(value!=='aaa');
                }, 3000)
            })
        }),
        lastname: yup.string().required('first is required').min(3).max(5),
        // password1: yup.string().required('password is required').min(5).max(8),
        // password2: yup.string().oneOf([yup.ref('password1')], 'should be same as password1' )
        password1: yup.string().required('password is required').min(5).max(8).equalTo(yup.ref('password2'), 'should be same as password2.'),
        password2: yup.string().required('password is required').min(5).max(8).equalTo(yup.ref('password1'), 'should be same as password1.'),
    });

    newState;
    doValidate = (e)=>{
        const targetName = e.target.name;
        const targetValue = e.target.value;
        const fieldNum = 4;

        //create new state
        this.newState = {
            ...this.state,
            [targetName]: targetValue
        }
        this.newState.touched[targetName] = true;
        this.newState.loading = true;
        this.newState.disabled = true;
        this.setState(this.newState);
        
        const path = targetName;

        this.schema.validateAt(path, this.newState).then(value=>{
            delete this.newState.errors[targetName];

            if(targetName=== 'password1' && targetValue === this.newState.password2){
                delete this.newState.errors.password2;
            }else if(targetName=== 'password2' && targetValue === this.newState.password1){
                delete this.newState.errors.password1;
            }
            this.newState.loading = false;
            this.newState.disabled = Object.keys(this.newState.errors).length > 0 || Object.keys(this.newState.touched).length < fieldNum;
            this.setState(this.newState)
        }).catch(err=>{
            this.newState.errors[err.path] = err.errors;
            this.newState.loading = false;
            this.newState.disabled = true;
            this.setState(this.newState)
        });
    }
    handleOnBlur = (e)=>{
        this.doValidate(e);
    }
    handleOnChange=(e)=>{
        this.doValidate(e);
    };

    //TODO : onSubmit에서 e를 이용해서 form전체의 값을 받기
    nameRef=null;
    handleOnSubmit=(e)=>{
        e.preventDefault();
        let data = new FormData(e.target);

        let payload = {};
        for(var pair of data.entries()) {
            payload[pair[0]]=pair[1];
        }
        this.props.onSubmit(payload);
    };

    render() {
        // const {fullname} = this.props;
        // const {fullname, password1, password2} = this.state;
        const {firstname, lastname, password1, password2} = this.state;
        return (
            <form onSubmit={this.handleOnSubmit}>
                <div>
                <span>
                    <input type="text"
                        name='firstname'
                        defaultValue={firstname}
                        onChange={this.handleOnChange}
                        onBlur={this.handleOnBlur}
                        placeholder='first name'
                    />
                    <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.firstname}</div>
                </span>
                <span>
                    <input type="text"
                        name='lastname'
                        defaultValue={lastname}
                        onChange={this.handleOnChange}
                        onBlur={this.handleOnBlur}
                        placeholder='last name'
                    />
                    <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.lastname}</div>
                </span>
                </div>
                <div>
                    <input type="password"
                           name='password1'
                           defaultValue={password1}
                           onChange={this.handleOnChange}
                           onBlur={this.handleOnBlur}
                           placeholder='password1'
                    />
                    <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.password1}</div>
                    <input type="password"
                           name='password2'
                           defaultValue={password2}
                           onChange={this.handleOnChange}
                           onBlur={this.handleOnBlur}
                           placeholder='password2'
                    />
                    <div style={{fontSize:'10px', color: 'red'}}>{this.state.errors.password2}</div>
                </div>
                <div>
                <button type="submit" disabled={this.state.disabled || this.state.loading}>submit</button>
                </div>
            </form>
        );
    }
}

export default NamePHSForm;