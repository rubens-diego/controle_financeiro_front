import styled from 'styled-components';



interface IDivRow {
  pd?: string
  hg?: string
  jContent?: string
}

interface IDivcol {
  pd?: string
  hg?: string
  wd?: string
  mg?: string
  align?: string
}



export const GridContainer = styled.div`
  max-width: 100%;
  height: calc(100% - 60px);
  margin: 0 auto;
  .tooltip-chat {
    background: #fff;
    padding: 20px;
    border-radius: 4px;
    border: 1px solid #ddd;
    text-align: left;
   
  }

  .recharts-text {
    font-size: 8px;
  }
`;

export const GridRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: ${(props: IDivRow) => (props.pd ? props.pd : 'auto')};
  height: ${(props: IDivRow) => (props.hg ? props.hg : 'auto')};
  justify-content: ${(props: IDivRow) => (props.jContent ? props.jContent : 'initial')};
`;

export const GridCol = styled.div`
  width: ${(props: IDivcol) => props.wd};
  height: ${(props: IDivcol) => (props.hg ? props.hg : 'auto')};
  padding: ${(props: IDivcol) => (props.pd ? props.pd : 'auto')};
  margin: ${(props: IDivcol) => (props.mg ? props.mg : 'auto')};
  flex: 0 0 ${(props: IDivcol) => props.wd};
  text-align: ${(props: IDivcol) => (props.align ? props.align : 'auto')};

  @media (max-width: 800px) {
    width: 100%;
    min-width: 100%;
  }
`;
