package com.api.insightink.insightInk.shared;

import org.postgresql.ds.PGSimpleDataSource;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.DefaultTransactionDefinition;

public class DBTransaction {
    public final PlatformTransactionManager platformTransactionManager;
    private TransactionDefinition transactionDefinition;
    private TransactionStatus transactionStatus;
    private int isolationLevel = TransactionDefinition.ISOLATION_DEFAULT;

    public DBTransaction(PGSimpleDataSource dataSource) {
        this.platformTransactionManager = new DataSourceTransactionManager(dataSource);
    }

    public void beginTxn(){
        DefaultTransactionDefinition dtd = new DefaultTransactionDefinition();
        dtd.setIsolationLevel(this.isolationLevel);
        this.transactionDefinition = dtd;
        this.transactionStatus = this.platformTransactionManager.getTransaction(this.transactionDefinition);
    }

    public void commitTxn(){
        if(!transactionStatus.isCompleted()){
            this.platformTransactionManager.commit(this.transactionStatus);
        }
    }

    public void rollbackTxn(){
        if(!transactionStatus.isCompleted()){
            this.platformTransactionManager.rollback(this.transactionStatus);
        }
    }

    public void setIsolationLevel(int isolationLevel){ this.isolationLevel = isolationLevel; }

    public int getIsolationLevel() {
        return isolationLevel;
    }
}
