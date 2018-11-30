import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent} from './components/profile/profile.component';
import { RepoComponent} from './components/repo/repo.component';
import { ProfileModule} from './components/profile/profile.module';
import { RepoModule} from './components/repo/repo.module';




const routes: Routes =[
		{ path:'profile', component:ProfileComponent },
		{ path:'repo',component:RepoComponent},
		{path:'',redirectTo:'profile',pathMatch:'full'}

	];

@NgModule({
	imports:[RouterModule.forRoot(routes)],
	exports: [RouterModule]

})
export class AppRoutingModule { 

}

