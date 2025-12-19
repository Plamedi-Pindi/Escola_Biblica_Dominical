import CustomContainer from "../../../components/Container/Container"
import CardCompont from "../../../components/Cards/Card"

import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import TopicOutlinedIcon from '@mui/icons-material/TopicOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';
import CallReceivedOutlinedIcon from '@mui/icons-material/CallReceivedOutlined';

const HomePage = () => {
    return (
        <CustomContainer>
            <div className="grid  grid-cols-2 gap-3">
                {/* Professores */}
                <CardCompont
                    style={' col-span-1 '}
                    background={'!bg-violet-50'}
                    cardIcon={<SchoolOutlinedIcon className="text-sky-600" />}
                    cardBG={'bg-sky-500/20 '}
                    mainText={'30'}
                    secText={'Monitores'}
                    optionalIcon={<CallMadeOutlinedIcon className="!w-4 !h-3.5 " />}
                    purcentage={'80%'}
                    opsionalText={'Último mês'}
                    status={'text-green-600'}
                />
                {/* Alunos */}
                <CardCompont
                    style={' col-span-1 '}
                    background={'!bg-violet-50'}
                    cardIcon={<GroupAddOutlinedIcon className="text-yellow-600" />}
                    cardBG={'bg-yellow-500/20 '}
                    mainText={'1200'}
                    secText={'Alunos'}
                    optionalIcon={<CallReceivedOutlinedIcon className="!w-4 !h-3.5" />}
                    purcentage={'80%'}
                    opsionalText={'Último mês'}
                    status={'text-red-600'}
                />
                {/* Licoes */}
                <CardCompont
                    style={' col-span-1 '}
                    background={'!bg-violet-50'}
                    cardIcon={<TopicOutlinedIcon className="text-lime-600" />}
                    cardBG={'bg-lime-500/20 '}
                    mainText={'09'}
                    secText={'Lições'}
                    optionalIcon={<CallMadeOutlinedIcon className="!w-4 !h-3.5" />}
                    purcentage={'80%'}
                    opsionalText={'Este ano'}
                    status={'text-green-600'}
                />
                <CardCompont
                    style={' col-span-1 '}
                    background={'!bg-violet-50'}
                    cardIcon={<EmojiEventsOutlinedIcon className="text-fuchsia-600" />}
                    cardBG={'bg-fuchsia-500/20 '}
                    mainText={'10'}
                    secText={'Eventos'}
                    optionalIcon={<CallReceivedOutlinedIcon className="!w-4 !h-3.5" />}
                    purcentage={'80%'}
                    opsionalText={'Este ano'}
                    status={'text-red-600'}
                />
               
            </div>

        </CustomContainer>
    )
}

export default HomePage